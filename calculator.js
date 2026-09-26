/* tool-ganho-de-peso-gestacional · Elucenia · https://github.com/Elucenia/tool-ganho-de-peso-gestacional
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"ganho-de-peso-gestacional","title":"Ganho de peso gestacional (IOM 2009)","fields":[["peso_pre","Peso pré-gestacional","num",{"min":30,"max":250,"step":0.1,"unit":"kg","ph":"60"}],["altura","Altura","num",{"min":130,"max":200,"step":1,"unit":"cm","ph":"163"}],["gemelar","Gestação","radio",{"opts":{"0":"Única","1":"Gemelar"}}],["peso_atual","Peso atual <small>(opcional)</small>","num",{"min":30,"max":280,"step":0.1,"unit":"kg","ph":"66","opt":true}],["ig_sem","Idade gestacional atual <small>(opcional)</small>","num",{"min":4,"max":42,"step":1,"unit":"semanas","ph":"26","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
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
var f=[[0,"baixo peso (IMC &lt; 18,5)",12.5,18,.44,.58,null,null],[18.5,"eutrofia (IMC 18,5 a 24,9)",11.5,16,.35,.5,17,25],[25,"sobrepeso (IMC 25 a 29,9)",7,11.5,.23,.33,14,23],[30,"obesidade (IMC ≥ 30)",5,9,.17,.27,11,19]];
a.def("ganho-de-peso-gestacional",function(a){var r=a.peso_pre/Math.pow(a.altura/100,2),i=f[0],n="1"===a.gemelar,t=e.r1(r,1);if(f.forEach(function(a){t>=a[0]&&(i=a)}),n&&null==i[6])return{main:[o(r,1),"kg/m²"],label:"IMC pré-gestacional",level:"info",verdict:"Gestação gemelar com baixo peso: o IOM não definiu faixa de ganho (dados insuficientes)",raw:{imc:r}};var d=n?i[6]:i[2],s=n?i[7]:i[3],l=[["IMC pré-gestacional",o(r,1)+" kg/m² · "+i[1]]];n||l.push(["Ritmo no 2º e 3º trimestres",o(i[4],2)+" a "+o(i[5],2)+" kg/semana"]);var c="info",m="Ganho total recomendado: "+o(d,1)+" a "+o(s,1)+" kg",u="",p={imc:r,min:d,max:s};if(null!=a.peso_atual&&null!=a.ig_sem){var g=a.peso_atual-a.peso_pre,v=a.ig_sem,h=n?null:v<=13?0:.5+i[4]*(v-13),w=n?null:v<=13?2:2+i[5]*(v-13);l.push(["Ganho até agora",o(g,1)+" kg em "+v+" semanas"]),p.ganho=g,n||(l.push(["Faixa esperada nesta idade gestacional",o(h,1)+" a "+o(w,1)+" kg"]),p.esp_min=h,p.esp_max=w,g<h?(c="mid",u="Ganho abaixo do esperado para a idade gestacional: reavalie ingestão, vômitos e crescimento fetal."):g>w?(c="mid",u="Ganho acima do esperado para a idade gestacional: reavalie dieta, atividade física e edema (pré-eclâmpsia)."):c="low",m+="low"===c?" · ganho atual dentro do esperado":g<h?" · ganho atual abaixo do esperado":" · ganho atual acima do esperado")}return{main:[o(d,1)+" a "+o(s,1),"kg no total"],label:"Ganho de peso recomendado (IOM 2009)"+(n?" · gemelar":""),level:c,verdict:m,rows:l,note:u,raw:p}});
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
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
