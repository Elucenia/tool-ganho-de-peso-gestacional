/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"ganho-de-peso-gestacional","title":"Ganho de peso gestacional (IOM 2009)","fields":[["peso_pre","Peso pré-gestacional","num",{"min":30,"max":250,"step":0.1,"unit":"kg","ph":"60"}],["altura","Altura","num",{"min":130,"max":200,"step":1,"unit":"cm","ph":"163"}],["gemelar","Gestação","radio",{"opts":{"0":"Única","1":"Gemelar"}}],["peso_atual","Peso atual <small>(opcional)</small>","num",{"min":30,"max":280,"step":0.1,"unit":"kg","ph":"66","opt":true}],["ig_sem","Idade gestacional atual <small>(opcional)</small>","num",{"min":4,"max":42,"step":1,"unit":"semanas","ph":"26","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var f=[[0,"baixo peso (IMC &lt; 18,5)",12.5,18,.44,.58,null,null],[18.5,"eutrofia (18,5 ≤ IMC < 25)",11.5,16,.35,.5,17,25],[25,"sobrepeso (25 ≤ IMC < 30)",7,11.5,.23,.33,14,23],[30,"obesidade (IMC ≥ 30)",5,9,.17,.27,11,19]];
function gestationalBmiAtLeast(weight, heightCm, threshold) {
  function decimalParts(value) {
    if (!Number.isFinite(value) || value < 0) throw new Error('BMI comparison requires finite nonnegative values');
    var m = /^(\d+)(?:\.(\d+))?(?:e([+-]?\d+))?$/.exec(value.toString());
    if (!m) throw new Error('Unsupported canonical decimal BMI operand');
    return { coefficient: BigInt(m[1] + (m[2] || '')), exponent: Number(m[3] || 0) - (m[2] || '').length };
  }
  // Category boundaries use the unrounded canonical decimal inputs. The raw
  // floating BMI and its presentation retain their separate display role.
  var w = decimalParts(weight), h = decimalParts(heightCm), t = decimalParts(threshold);
  var leftExponent = w.exponent, rightExponent = 2 * h.exponent + t.exponent;
  var exponent = Math.min(leftExponent, rightExponent);
  var left = w.coefficient * 10000n * 10n ** BigInt(leftExponent - exponent);
  var right = h.coefficient * h.coefficient * t.coefficient * 10n ** BigInt(rightExponent - exponent);
  return left >= right;
}
function gestationalBmiDisplay(weight, heightCm) {
  function decimalParts(value) {
    var m = /^(\d+)(?:\.(\d+))?(?:e([+-]?\d+))?$/.exec(value.toString());
    if (!m) throw new Error('Unsupported canonical decimal BMI operand');
    return { coefficient: BigInt(m[1] + (m[2] || '')), exponent: Number(m[3] || 0) - (m[2] || '').length };
  }
  var w = decimalParts(weight), h = decimalParts(heightCm);
  var numerator = w.coefficient * 10000n, denominator = h.coefficient * h.coefficient;
  var exponent = w.exponent - 2 * h.exponent;
  if (exponent >= 0) numerator *= 10n ** BigInt(exponent);
  else denominator *= 10n ** BigInt(-exponent);
  function category(n, d) { return n * 2n < 37n * d ? 0 : n < 25n * d ? 1 : n < 30n * d ? 2 : 3; }
  function decimalString(value, digits) {
    var s = value.toString().padStart(digits + 1, '0');
    return s.slice(0, -digits) + ',' + s.slice(-digits);
  }
  var actual = category(numerator, denominator);
  // Display precision is separate from measurement accuracy. Add digits only
  // when rounding would contradict the category based on unrounded inputs.
  for (var digits = 1; digits <= 20; digits++) {
    var scale = 10n ** BigInt(digits), scaled = numerator * scale;
    var rounded = scaled / denominator;
    if ((scaled % denominator) * 2n >= denominator) rounded++;
    if (category(rounded, scale) === actual) return decimalString(rounded, digits);
  }
  return '< ' + ['18,5', '25,0', '30,0'][actual];
}
a.def("ganho-de-peso-gestacional",function(a){var r=a.peso_pre/Math.pow(a.altura/100,2),i=f[0],n="1"===a.gemelar,t={weight:a.peso_pre,height:a.altura};if(f.forEach(function(a){gestationalBmiAtLeast(t.weight,t.height,a[0])&&(i=a)}),n&&null==i[6])return{main:[gestationalBmiDisplay(a.peso_pre,a.altura),"kg/m²"],label:"IMC pré-gestacional",level:"info",verdict:"Gestação gemelar com baixo peso: o IOM não definiu faixa de ganho (dados insuficientes)",raw:{imc:r}};var d=n?i[6]:i[2],s=n?i[7]:i[3],l=[["IMC pré-gestacional",gestationalBmiDisplay(a.peso_pre,a.altura)+" kg/m² · "+i[1]]];n||l.push(["Ritmo no 2º e 3º trimestres",o(i[4],2)+" a "+o(i[5],2)+" kg/semana"]);var c="info",m="Ganho total recomendado: "+o(d,1)+" a "+o(s,1)+" kg",u="",p={imc:r,min:d,max:s};if(null!=a.peso_atual&&null!=a.ig_sem){var g=a.peso_atual-a.peso_pre,v=a.ig_sem,h=n?null:v<=13?0:.5+i[4]*(v-13),w=n?null:v<=13?2:2+i[5]*(v-13);l.push(["Ganho até agora",o(g,1)+" kg em "+v+" semanas"]),p.ganho=g,n||(l.push(["Faixa esperada nesta idade gestacional",o(h,1)+" a "+o(w,1)+" kg"]),p.esp_min=h,p.esp_max=w,g<h?(c="mid",u="Ganho abaixo do esperado para a idade gestacional: reavalie ingestão, vômitos e crescimento fetal."):g>w?(c="mid",u="Ganho acima do esperado para a idade gestacional: reavalie dieta, atividade física e edema (pré-eclâmpsia)."):c="low",m+="low"===c?" · ganho atual dentro do esperado":g<h?" · ganho atual abaixo do esperado":" · ganho atual acima do esperado")}return{main:[o(d,1)+" a "+o(s,1),"kg no total"],label:"Ganho de peso recomendado (IOM 2009)"+(n?" · gemelar":""),level:c,verdict:m,rows:l,note:u,raw:p}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},...(typeof r.level==='string'?{level:r.level}:{}),...(typeof r.verdict==='string'?{verdict:r.verdict}:{}),...(Array.isArray(r.rows)?{rows:r.rows}:{}),...(typeof r.note==='string'&&r.note?{note:r.note}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
