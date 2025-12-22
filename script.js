
const medicoSelect = document.getElementById("tipoCirurgiao");
const crm = document.getElementById('crm');
// TIPO DE CIRURGIAO
medicoSelect.addEventListener('change', function () {
   // tipoCirurgiao crm
   const tipo = this.value;

   crm.value = tipo;
});

const profissionais = [
   { codigo: 17311032299, descricao: "Dr. Amauri de Oliveira", crm: 32209},
   { codigo: 17311038906, descricao: "Dr. Aldery de Oliveira", crm: 38906},
   { codigo: 123, descricao: "Outro", crm: ""},
   // { codigo: 17311008170, descricao: "Dr. Tomé Lucas Pereira Filho", crm: 3},
]

// opção padrão
const opt= document.createElement("option");
opt.value = "";
opt.textContent = "Selecione...";
medicoSelect.appendChild(opt);
profissionais.forEach(c => {
   const option = document.createElement("option");
   option.value = c.crm;
   option.textContent = c.descricao;
   medicoSelect.appendChild(option);
});

// CALCULAR DURAÇÃO
const inicio = document.getElementById('inicio');
const fim = document.getElementById('fim');
const resultado = document.getElementById('duracao');

function calcular() {
   console.log("calcular: ini:"+inicio.value + " - fim: "+fim.value);
   if (!inicio.value || !fim.value) return;

   const [hi, mi] = inicio.value.split(':').map(Number);
   const [hf, mf] = fim.value.split(':').map(Number);

   let tInicio = hi * 60 + mi;
   let tFim = hf * 60 + mf;

   if (tFim < tInicio) tFim += 1440;

   const diff = tFim - tInicio;
   resultado.value = `${Math.floor(diff / 60)}h ${diff % 60}min`;
}

inicio.addEventListener('change', calcular);
fim.addEventListener('change', calcular);

function autoResize(el) {
   el.style.height = 'auto';
   el.style.height = el.scrollHeight + 'px';

   if (el.value.length > 600) {
      el.value = el.value.slice(0, 600)
   }
}
const relatorio =  "Realizada cirurgia (CIRURGIA), código (CÓDIGO), em (DATA), das (INÍCIO) às (FIM), com duração (DURAÇÃO), " +
 "sob responsabilidade do cirurgião (CIRURGIÃO) – CRM (CRM DO CIRURGIÃO), com auxílio de (1º AUXILIAR) – CRM (CRM 1º AUXILIAR) e (2º AUXILIAR) – CRM (CRM 2º AUXILIAR).\n" +
 "Anestesia (ANESTESIA) realizada por (ANESTESISTA) – CRM (CRM ANESTESISTA), ASA (ASA), sem intercorrências, com paciente estável durante todo o procedimento.\n" +
 "Pré-anestésico administrado às (HORA PRÉ-ANESTÉSICO), com efeito (EFEITO). Encaminhado à recuperação anestésica em condições estáveis.";
var resumo = document.getElementById("resumo");
resumo.value = relatorio;
autoResize(resumo);




// DADOS DOS MEDICAMENTOS
const dados = {
   profissional: [
      { codigo: 17311032299, descricao: "Dr. Amauri de Oliveira", crm: 1},
      { codigo: 17311038906, descricao: "Dr. Aldery de Oliveira", crm: 2},
      { codigo: 17311008170, descricao: "Dr. Tomé Lucas Pereira Filho", crm: 3},
   ],
   medicamento: [
      { codigo: 'MED1', descricao: "Adrenalina 1ml", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 'MED2', descricao: "Aminofilina 10ml", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 90122704, descricao: "Água Destilada 1000 ml", qtde: 1, und: "fa", valorUnitario: 8.23, valorTotal: 8.23 },
      { codigo: 90297300, descricao: "Anestalcon Colírio 5 ml", qtde: 10, und: "gts", valorUnitario: 0.06, valorTotal: 0.60 },
      { codigo: 90184114, descricao: "Avastin 100 mg", qtde: 75, und: "mg", valorUnitario: null, valorTotal: null },
      { codigo: 'MED3', descricao: "Azul de Tripan", qtde: 1, und: "ml", valorUnitario: null, valorTotal: null },
      { codigo: 'MED4', descricao: "Bicarbonato de Sódio 10ml", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 'MED5', descricao: "Cloreto de Sódio", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 'MED6', descricao: "Colírio Anestésico", qtde: 1, und: "gts", valorUnitario: null, valorTotal: null },
      { codigo: 'MED7', descricao: "Colírio Cicloplégico", qtde: 1, und: "gts", valorUnitario: null, valorTotal: null },
      { codigo: 'MED8', descricao: "Colírio Fenilefrina", qtde: 1, und: "gts", valorUnitario: null, valorTotal: null },
      { codigo: 'MED9', descricao: "Colírio Lacrifilm", qtde: 1, und: "gts", valorUnitario: null, valorTotal: null },
      { codigo: 'MED10', descricao: "Colírio Mitomicina 0,02%", qtde: 1, und: "gts", valorUnitario: null, valorTotal: null },
      { codigo: 'MED43', descricao: "Colírio Mitomicina 10ml", qtde: 1, und: "gts", valorUnitario: null, valorTotal: null },
      { codigo: 90397932, descricao: "Emla Pomada 5 gr", qtde: 1, und: "mg", valorUnitario: 4.77, valorTotal: 4.77 },
      { codigo: 90284739, descricao: "Eylia 40 mg/ml Sol Inj", qtde: 1, und: "fa", valorUnitario: 3819.67, valorTotal: 3819.67 },
      { codigo: 'MED11', descricao: "Feldene 10mg", qtde: 1, und: "com", valorUnitario: null, valorTotal: null },
      { codigo: 'MED12', descricao: "Fenilefrina", qtde: 1, und: "gts", valorUnitario: null, valorTotal: null },
      { codigo: 'MED13', descricao: "Fenergan 2ml", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 'MED14', descricao: "Gentamicida 80mg", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 90512057, descricao: "Gentamicin 40 mg/ml", qtde: 1, und: "amp", valorUnitario: 1.59, valorTotal: 1.59 },
      { codigo: 'MED15', descricao: "Glicose 25% 10ml", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 'MED16', descricao: "Glicose 50% 10ml", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 'MED17', descricao: "Glicose Hipertônica 50%", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 'MED19', descricao: "Gluconato de Cálcio 10ml", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 'MED20', descricao: "Hialozima", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 'MED21', descricao: "Hidrocortisona 100 mg", qtde: 1, und: "fa", valorUnitario: null, valorTotal: null },
      { codigo: 'MED22', descricao: "Hidrocortisona 500 mg", qtde: 1, und: "fa", valorUnitario: null, valorTotal: null },
      { codigo: 90008332, descricao: "Kefazol 1g", qtde: 1, und: "fa", valorUnitario: 24.08, valorTotal: 24.08 },
      { codigo: 90008375, descricao: "Keflin Neutro", qtde: 1, und: "amp", valorUnitario: 7.34, valorTotal: 7.34 },
      { codigo: 'MED23', descricao: "Lasix 2ml", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 90099753, descricao: "Lidocaína 2% CV 20 ml", qtde: 10, und: "ml", valorUnitario: 0.31, valorTotal: 3.10 },
      { codigo: 'MED24', descricao: "Lidocaína 2% s/v", qtde: 1, und: "ml", valorUnitario: null, valorTotal: null },
      { codigo: 90257570, descricao: "Lidocaína Geleia 2% 30 mg", qtde: 5, und: "gr", valorUnitario: 0.38, valorTotal: 1.90 },
      { codigo: 'MED25', descricao: "Lidocaína Pesada 2ml", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 90573633, descricao: "Lanexat 0,1 mg/ml", qtde: 1, und: "amp", valorUnitario: 316.06, valorTotal: 316.06 },
      { codigo: 90047494, descricao: "Marcaína 0,75% 20 ml", qtde: 10, und: "ml", valorUnitario: 2.09, valorTotal: 20.90 },
      { codigo: 'MED26', descricao: "Marcaína 0,5%", qtde: 1, und: "ml", valorUnitario: null, valorTotal: null },
      { codigo: 'MED27', descricao: "Marcaína 0,25%", qtde: 1, und: "ml", valorUnitario: null, valorTotal: null },
      { codigo: 'MED28', descricao: "Marcaína Pesada", qtde: 1, und: "ml", valorUnitario: null, valorTotal: null },
      { codigo: 90297490, descricao: "Maxitrol 1,0 MG/G pomada", qtde: 1, und: "g", valorUnitario: 9.48, valorTotal: 9.48 },
      { codigo: 'MED29', descricao: "Metoclopramida", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 90175212, descricao: "Miostat 1,5 ml (Carbachol)", qtde: 1, und: "fa", valorUnitario: 33.96, valorTotal: 33.96 },
      { codigo: 90297512, descricao: "Mydriacyl 1% Colírio 5 ml", qtde: 10, und: "gts", valorUnitario: 0.11, valorTotal: 1.10 },
      { codigo: 90069765, descricao: "Nimesulida 100 mg", qtde: 1, und: "com", valorUnitario: 0.50, valorTotal: 0.50 },
      { codigo: 'MED30', descricao: "Oclusor", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 90302370, descricao: "Propovan 10 MG/ML (Propofol)", qtde: 1, und: "amp", valorUnitario: 11.42, valorTotal: 11.42 },
      { codigo: 90433068, descricao: "Regencel 10.000 UI/G (Epitezan)", qtde: 1, und: "mg", valorUnitario: 4.53, valorTotal: 4.53 },
      { codigo: 90123255, descricao: "Solução Ringer com Lactado 500 ml", qtde: 1, und: "bols", valorUnitario: 9.24, valorTotal: 9.24 },
      { codigo: 90372530, descricao: "Solução Salina Balanceada BSS 500 ml", qtde: 1, und: "bols", valorUnitario: 40.80, valorTotal: 40.80 },
      { codigo: 90019881, descricao: "Soro Fisiológico 250 ml", qtde: 1, und: "fr", valorUnitario: 9.38, valorTotal: 9.38 },
      { codigo: 'MED31', descricao: "Soro Fisiológico 500ml", qtde: 1, und: "fr", valorUnitario: null, valorTotal: null },
      { codigo: 'MED32', descricao: "Soro Fisiológico 1000ml", qtde: 1, und: "fr", valorUnitario: null, valorTotal: null },
      { codigo: 'MED33', descricao: "Soro Glicosado 250ml", qtde: 1, und: "fr", valorUnitario: null, valorTotal: null },
      { codigo: 'MED34', descricao: "Soro Glicosado 500ml", qtde: 1, und: "fr", valorUnitario: null, valorTotal: null },
      { codigo: 'MED35', descricao: "Soro Glicosado 1000ml", qtde: 1, und: "fr", valorUnitario: null, valorTotal: null },
      { codigo: 'MED42', descricao: "Equipo soro eurofix", qtde: 1, und: "fr", valorUnitario: null, valorTotal: null },
      { codigo: 'MED36', descricao: "Sol Manitol 20% 250ml", qtde: 1, und: "fr", valorUnitario: null, valorTotal: null },
      { codigo: 'MED37', descricao: "Sulfato de Atropina 0,5mg", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 'MED38', descricao: "Sulfato de Efedrina 1ml", qtde: 1, und: "amp", valorUnitario: null, valorTotal: null },
      { codigo: 'MED39', descricao: "Toragesic Sublingual", qtde: 1, und: "com", valorUnitario: null, valorTotal: null },
      { codigo: 'MED40', descricao: "Tylenol 750 mg", qtde: 1, und: "com", valorUnitario: null, valorTotal: null },
      // { codigo: 90524845, descricao: "Valium Diazepam 5 mg", qtde: 1, und: "com", valorUnitario: 0.73, valorTotal: 0.73 },
      { codigo: 'MED41', descricao: "Vigadexa Colírio", qtde: 1, und: "gts", valorUnitario: null, valorTotal: null },
      { codigo: 90297610, descricao: "Vigamox 5 mg/ml", qtde: 3, und: "gts", valorUnitario: 0.35, valorTotal: 1.05 },
      { codigo: 90397916, descricao: "Xylocaína 50 MG/G", qtde: 1, und: "g", valorUnitario: 0.97, valorTotal: 0.97 }
   ],
   materiais : [
      { codigo: 'MAT1', descricao: "Agulha Descartável 13x45", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT2', descricao: "Agulha Descartável 25x7", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT3', descricao: "Agulha Descartável 40x12", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 1900180734, descricao: "Agulha descartável 13x4,5", qtde: 1, und: "un", valorUnitario: 0.17, valorTotal: 0.17 },
      { codigo: 'MAT4', descricao: "Agulha Peridural", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT5', descricao: "Algodão Ortopédico 15cm", qtde: 1, und: "rl", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT6', descricao: "Atadura Crepon 10cm", qtde: 1, und: "rl", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT7', descricao: "Atadura Crepon 15cm", qtde: 1, und: "rl", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT8', descricao: "Atadura Crepon 20cm", qtde: 1, und: "rl", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT9', descricao: "Calsodata (10g)", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 1900049204, descricao: "Campo cirúrgico", qtde: 2, und: "un", valorUnitario: 7.86, valorTotal: 15.72 },
      { codigo: 1900101265, descricao: "Campo cirúrgico fenestrado", qtde: 1, und: "un", valorUnitario: 3.11, valorTotal: 3.11 },
      { codigo: 'MAT10', descricao: "Campo Mesa", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT11', descricao: "Campo Operatório 45x50", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT12', descricao: "Capote", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT13', descricao: "Cateter Nasal Tipo Óculos", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 1900587745, descricao: "Compressa gaze 7,5 x 7,5 cm (iris)", qtde: 4, und: "pct", valorUnitario: 2.05, valorTotal: 8.20 },
      { codigo: 1900588440, descricao: "Cotonete", qtde: 10, und: "un", valorUnitario: 0.11, valorTotal: 1.10 },
      { codigo: 70223750, descricao: "Equipo p/ inf mult polifix", qtde: 1, und: "un", valorUnitario: 17.28, valorTotal: 17.28 },
      { codigo: 'MAT42', descricao: "Equipo p/ soro microfix", qtde: 1, und: "un", valorUnitario: 17.28, valorTotal: 17.28 },
      { codigo: 'MAT14', descricao: "Equipo p/ Soro", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 1902758350, descricao: "Escova de assepsia", qtde: 2, und: "un", valorUnitario: 6.68, valorTotal: 13.36 },
      { codigo: 'MAT15', descricao: "Esparadrapo (20cm)", qtde: 1, und: "rl", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT16', descricao: "Fita Micropore 25mm (20cm)", qtde: 1, und: "rl", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT17', descricao: "Gaze Aberta Tipo Queijo", qtde: 1, und: "pct", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT18', descricao: "Gelco 18", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT19', descricao: "Gelco 22", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT20', descricao: "Gelco 24", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT21', descricao: "Gillete", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 70334307, descricao: "Injetor descartável p/ implante de LIO", qtde: 1, und: "un", valorUnitario: 31.61, valorTotal: 31.61 },
      { codigo: 70360758, descricao: "Lâmina de bisturi 11", qtde: 1, und: "un", valorUnitario: 2.94, valorTotal: 2.94 },
      { codigo: 70360812, descricao: "Lâmina de bisturi 15", qtde: 1, und: "un", valorUnitario: 2.60, valorTotal: 2.60 },
      { codigo: 'MAT22', descricao: "Lâmina Bisturi 22", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 74311808, descricao: "Lente intra-ocular liberada", qtde: 1, und: "un", valorUnitario: 300.00, valorTotal: 300.00 },
      { codigo: 'MAT23', descricao: "Lente Terapêutica", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 1900241334, descricao: "Luva 7,0", qtde: 2, und: "par", valorUnitario: 1.59, valorTotal: 3.18 },
      { codigo: 'MAT24', descricao: "Luva Cirúrgica 7,5", qtde: 1, und: "par", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT25', descricao: "Luva Cirúrgica 8,0", qtde: 1, und: "par", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT26', descricao: "Luva Procedimento", qtde: 1, und: "cx", valorUnitario: null, valorTotal: null },
      { codigo: 1900591572, descricao: "Máscara", qtde: 3, und: "un", valorUnitario: 0.37, valorTotal: 1.11 },
      { codigo: 1900178616, descricao: "Metilcelulose 2% 2,5 ml", qtde: 1, und: "kit", valorUnitario: 90.76, valorTotal: 90.76 },
      { codigo: 'MAT27', descricao: "Myracel", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT28', descricao: "Óculos Proteção", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 1900588806, descricao: "Oclusor Oftálmico Estéril", qtde: 1, und: "un", valorUnitario: 4.44, valorTotal: 4.44 },
      { codigo: 'MAT29', descricao: "Pasta p/ Eletro", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 1900651117, descricao: "Scalp 21 g", qtde: 1, und: "un", valorUnitario: 0.49, valorTotal: 0.49 },
      { codigo: 'MAT30', descricao: "Scalp 19", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT31', descricao: "Scalp 23", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT32', descricao: "Scalp 25", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 1900119709, descricao: "Seringa descartável 01 ml c/ ag", qtde: 1, und: "un", valorUnitario: 0.27, valorTotal: 0.27 },
      { codigo: 'MAT33', descricao: "Seringa Descartável 3ml", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT43', descricao: "Seringa descartável 05 ml c/ ag plastip", qtde: 2, und: "un", valorUnitario: 0.15, valorTotal: 0.30 },
      { codigo: 1900119733, descricao: "Seringa descartável 05 ml c/ ag", qtde: 2, und: "un", valorUnitario: 0.15, valorTotal: 0.30 },
      { codigo: 1900119725, descricao: "Seringa descartável 10 ml c/ ag", qtde: 1, und: "un", valorUnitario: 0.25, valorTotal: 0.25 },
      { codigo: 'MAT34', descricao: "Seringa Descartável 20ml", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT35', descricao: "Sonda de Aspirar", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT36', descricao: "Sonda Foley 3 vias", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT37', descricao: "Sonda Foley n°", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT38', descricao: "Sonda Gástrica n°", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT39', descricao: "Sonda Uretral n°", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 'MAT40', descricao: "Torneira Descartável 3 vias", qtde: 1, und: "un", valorUnitario: null, valorTotal: null },
      { codigo: 1900588466, descricao: "Touca descartável", qtde: 3, und: "un", valorUnitario: 0.08, valorTotal: 0.24 },
      { codigo: 'MAT41', descricao: "Tubo Endotraqueal", qtde: 1, und: "un", valorUnitario: null, valorTotal: null }
   ],

   controlado : [
      { codigo: 'CTR1', descricao: "Diazepam 2ml" , qtde: 1,und: "gts"},
      { codigo: 'CTR2', descricao: "Dolantina" , qtde: 1,und: "com"},
      { codigo: 'CTR3', descricao: "Dormonid 15ml" , qtde: 1,und: "gts"},
      { codigo: 'CTR4', descricao: "Halotano" , qtde: 1,und: "com"},
      { codigo: 90524845, descricao: "Valium 5mg" , qtde: 1,und: "com"},
      { codigo: 'CTR5', descricao: "Ketalar 10ml" , qtde: 1,und: "gts"},
      { codigo: 'CTR6', descricao: "Thionembutal 1g" , qtde: 1,und: "com"}
   ],

   fios: [
      { codigo: 1900134260, descricao: "Fio mononylon 6-0", qtde: 1, und: "un", valorUnitario: 17.20, valorTotal: 17.20 },
      { codigo: 1900137936, descricao: "Fio mononylon 10-0", qtde: 1, und: "un", valorUnitario: 97.09, valorTotal: 97.09 },
      { codigo: 76449580, descricao: "Fio mononylon preto (Kit catarata Shalon)", qtde: 1, und: "kit", valorUnitario: 71.88, valorTotal: 71.88 },
      { codigo: 1900133884, descricao: "Fio seda preta oftalmo 4-0", qtde: 1, und: "un", valorUnitario: 14.10, valorTotal: 14.10 },
      { codigo: 1900134309, descricao: "Fio seda preta oftalmo 6-0", qtde: 1, und: "un", valorUnitario: 74.17, valorTotal: 74.17 },
      { codigo: 1900134520, descricao: "Fio Vicryl Oftalm Violeta 8-0", qtde: 1, und: "un", valorUnitario: 105.79, valorTotal: 105.79 },

      { codigo: "FI01", descricao: "CatGut 0 Cromado s/a" , qtde: 1},
      { codigo: "FI02", descricao: "CatGut 0 Cromado c/a" , qtde: 1},
      { codigo: "FI03", descricao: "CatGut 1 Cromado s/a" , qtde: 1},
      { codigo: "FI04", descricao: "CatGut 1 Cromado c/a" , qtde: 1},
      { codigo: "FI05", descricao: "CatGut 2.0 Cromado c/a" , qtde: 1},
      { codigo: "FI06", descricao: "CatGut 2.0 Simples s/a" , qtde: 1},
      { codigo: "FI07", descricao: "CatGut 2.0 Simples c/a" , qtde: 1},
      { codigo: "FI08", descricao: "CatGut 3.0 Simples c/a" , qtde: 1},
      { codigo: "FI09", descricao: "CatGut Cromado 3.0 c/a" , qtde: 1},
      { codigo: "FI10", descricao: "Cromado 4-0 c/a" , qtde: 1},
      { codigo: "FI11", descricao: "Kit Catarata 10.0" , qtde: 1},
      { codigo: "FI12", descricao: "Seda 7.0 c/a" , qtde: 1},
      { codigo: "FI13", descricao: "Polycot 0" , qtde: 1},
      { codigo: "FI14", descricao: "Polycot 2.0" , qtde: 1},
      { codigo: "FI15", descricao: "Polycot 3.0" , qtde: 1},
      { codigo: "FI16", descricao: "Poly Vicryl" , qtde: 1},
      { codigo: "FI17", descricao: "Prolene 3-0 c/a" , qtde: 1},
      { codigo: "FI18", descricao: "Prolene 4-0" , qtde: 1},
      { codigo: "FI19", descricao: "Prolene 5-0" , qtde: 1},
      { codigo: "FI20", descricao: "Prolene 6-0" , qtde: 1},
      { codigo: "FI21", descricao: "Prolene 7-0" , qtde: 1},
      { codigo: "FI22", descricao: "Seda Preta 2-0 s/a" , qtde: 1},
      { codigo: "FI23", descricao: "Superlon 0 s/a" , qtde: 1},
      { codigo: "FI24", descricao: "Superlon 2-0 s/a" , qtde: 1},
      { codigo: "FI25", descricao: "Superlon 2-0 c/a" , qtde: 1},
      { codigo: "FI26", descricao: "Superlon 3-0 c/a" , qtde: 1},
      { codigo: "FI27", descricao: "Superlon 4-0 c/a" , qtde: 1},
      { codigo: "FI28", descricao: "Superlon 5-0 c/a" , qtde: 1},
      { codigo: "FI29", descricao: "Superlon 6-0 c/a" , qtde: 1},
      { codigo: "FI30", descricao: "Surgicel" , qtde: 1},
      { codigo: "FI31", descricao: "Vicril 2-0 c/a Seda 4.0", qtde: 1 },
      { codigo: "FI32", descricao: "Vicril 3-0 c/a Seda 6.0" , qtde: 1},
      { codigo: "FI33", descricao: "Vicril 4-0 c/a" , qtde: 1},
      { codigo: "FI34", descricao: "Vicril 8-0 c/a" , qtde: 1}
   ],

   sol : [
      { codigo: "SL01", descricao: "Água Oxigenada" },
      { codigo: "SL02", descricao: "Álcool 70° 500ml" },
      { codigo: "SL03", descricao: "Éter 500ml" },
      { codigo: "SL04", descricao: "Álcool Iodado" },
      { codigo: "SL05", descricao: "Glutaraldeído 2%" },
      { codigo: "SL06", descricao: "Iodo Povidona 5ml" },
      { codigo: "SL07", descricao: "Mercúrio" },
      { codigo: "SL08", descricao: "Formol Líquido" },
      { codigo: "SL09", descricao: "P.V.P.I. Alcoólico" },
      { codigo: "SL10", descricao: "P.V.P.I. Degermante 100ml" },
      { codigo: "SL11", descricao: "P.V.P.I. Tópico" }
   ],

   gases: [
      { codigo: "GS01", descricao: "Ar Comprimido" },
      { codigo: "GS02", descricao: "O2 (Oxigênio)" },
      { codigo: "GS03", descricao: "CO2 (Gás Carbônico)" },
      { codigo: "GS04", descricao: "NO2 (Protóxido de Azoto)" }
   ],

   equip: [
      { codigo: "EQ01", descricao: "Aparelho Anestesia Geral" },
      { codigo: "EQ02", descricao: "Aspirador (Dia)" },
      { codigo: "EQ03", descricao: "Bisturi Bipolar (Uso)" },
      { codigo: "EQ04", descricao: "Bisturi Monopolar (Uso)" },
      { codigo: "EQ05", descricao: "Facoemulsificador" },
      { codigo: "EQ06", descricao: "Desfibrilador (Uso)" },
      { codigo: "EQ07", descricao: "Criocautério" },
      { codigo: "EQ08", descricao: "Radiofrequência" },
      { codigo: "EQ09", descricao: "Microscópio Cirúrgico" },
      { codigo: "EQ10", descricao: "Monitor Cardíaco (Uso)" },
      { codigo: "EQ11", descricao: "Monitor Oximetria Pulso" },
      { codigo: "EQ12", descricao: "Respirador (1ª hora)" },
      { codigo: "EQ13", descricao: "Foco Auxiliar" },
      { codigo: "EQ14", descricao: "Excimer Laser" }
   ],

   outros: [
      { codigo: "OT01", descricao: "Recuperação Pós-Anestésica" }
   ],
   taxas: [
      { codigo: "60023090", descricao: "Sala Cirúrgica, Porte Anestésico 0", valor: 50.37 },
      { codigo: "60023104", descricao: "Sala Cirúrgica, Porte 1", valor: 86.33 },
      { codigo: "60023112", descricao: "Sala Cirúrgica, Porte 2", valor: 129.53 },
      { codigo: "60023120", descricao: "Sala Cirúrgica, Porte 3", valor: 171.27 },
      { codigo: "60023139", descricao: "Sala Cirúrgica, Porte 4", valor: 216.01 },
      { codigo: "60023147", descricao: "Sala Cirúrgica, Porte 5", valor: 259.07 }
   ]

}
const itensValidos = new Set(
 Object.values(dados).flat()
);


// TIPOS DE CIRURGIAS
const select = document.getElementById("tipoCirurgia");
// DADOS DAS CIRURGIAS
const eylia = {
   profissional: { codigo: 17311032299},//Dr. Amauri de Oliveira,
   controlado: [],
   medicamentos: [
      { codigo: 90019881, qtde: 1 },   // Soro Fisiológico 250 ml
      { codigo: 90297512, qtde: 5 },   // Mydriacyl 1% Colírio 5 ml
      { codigo: 90297300, qtde: 5 },   // Anestalcon Colírio 5 ml
      { codigo: 90297610, qtde: 3 },   // Vigamox 5 mg/ml
      { codigo: 90284739, qtde: 1 }    // Eylia 40 mg/ml Sol Inj
   ],
   materiais: [
      { codigo: 1900180734, qtde: 1 }, // Agulha descartável 13x4,5
      { codigo: 1900101265, qtde: 1 }, // Campo cirúrgico fenestrado
      { codigo: 1900049204, qtde: 2 }, // Campo cirúrgico
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 1902758350, qtde: 2 }, // Escova de assepsia
      { codigo: 1900587745, qtde: 1 }, // Compressa gaze 7,5 x 7,5 cm (iris)
      { codigo: 1900241334, qtde: 1 }, // Luva 7,0
      { codigo: 1900591572, qtde: 3 }, // Máscara
      { codigo: 1900119709, qtde: 1 }, // Seringa descartável 01 ml c/ ag
      { codigo: 1900588466, qtde: 3 }  // Touca descartável
   ],
   taxas: [
      { codigo: "60023112",qtde:1},
   ]
};
const avastim = {
   profissional: { codigo: 17311032299},//Dr. Amauri de Oliveira,
   controlado: [],
   medicamentos: [
      { codigo: 90019881, qtde: 1 },   // Soro Fisiológico 250 ml
      { codigo: 90297512, qtde: 5 },   // Mydriacyl 1% Colírio 5 ml
      { codigo: 90297300, qtde: 5 },   // Anestalcon Colírio 5 ml
      { codigo: 90297610, qtde: 3 },   // Vigamox 5 mg/ml
      { codigo: 90184114, qtde: 100 }  // Avastin 100 mg
   ],
   materiais: [
      { codigo: 1900180734, qtde: 1 }, // Agulha descartável 13x4,5
      { codigo: 1900101265, qtde: 1 }, // Campo cirúrgico fenestrado
      { codigo: 1900049204, qtde: 2 }, // Campo cirúrgico
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 1902758350, qtde: 2 }, // Escova de assepsia
      { codigo: 1900587745, qtde: 1 }, // Compressa gaze 7,5 x 7,5 cm (iris)
      { codigo: 1900591572, qtde: 3 }, // Máscara
      { codigo: 1900241334, qtde: 1 }, // Luva 7,0
      { codigo: 1900119709, qtde: 1 }, // Seringa descartável 01 ml c/ ag
      { codigo: 1900588466, qtde: 3 }  // Touca descartável
   ],
   taxas: [
      { codigo: "60023112",qtde:1},
      { codigo: "60033681",qtde:1},
   ]
};
const facectomia = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional:  { codigo: 17311032299},//Dr. Amauri de Oliveira
   // { codigo: 17311008170}//Dr. Tomé Lucas Pereira Filho
   medicamentos: [
      { codigo: 90122704, qtde: 1 },  // Água Destilada 1000 ml
      { codigo: 90302370, qtde: 1 },  // Propovan
      { codigo: 90003551, qtde: 1 },  // Dexametasona
      { codigo: 90257570, qtde: 5 },  // Lidocaína Geleia
      { codigo: 90123255, qtde: 1 },  // Ringer Lactato
      { codigo: 90047494, qtde: 10 }, // Marcaína
      { codigo: 90372530, qtde: 1 },  // BSS
      { codigo: 90175212, qtde: 1 },  // Miostat
      { codigo: 90297512, qtde: 10 }, // Mydriacyl
      { codigo: 90297300, qtde: 10 }, // Anestalcon
      // { codigo: 90524845, qtde: 1 },  // Valium
      { codigo: 90528255, qtde: 1 },  // Diamox
      { codigo: 90512057, qtde: 1 },  // Gentamicin
      { codigo: 90008332, qtde: 1 },  // Kefazol
      { codigo: 90573633, qtde: 1 },  // Lanexat
      { codigo: 90297490, qtde: 1 }   // Maxitrol
   ],
   materiais: [
      { codigo: 1900178616, qtde: 1 }, // Metilcelulose
      { codigo: 1900180734, qtde: 2 }, // Agulha
      { codigo: 1900101265, qtde: 1 }, // Campo fenestrado
      { codigo: 1900049204, qtde: 1 }, // Campo cirúrgico
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo
      { codigo: 1902758350, qtde: 2 }, // Escova
      { codigo: 1900587745, qtde: 4 }, // Compressa
      { codigo: 70334307, qtde: 1 },   // Injetor LIO
      { codigo: 70360758, qtde: 1 },   // Bisturi 11
      { codigo: 70360812, qtde: 1 },   // Bisturi 15
      { codigo: 1900241334, qtde: 2 }, // Luva
      { codigo: 1900591572, qtde: 3 }, // Máscara
      { codigo: 1900651117, qtde: 1 }, // Scalp
      { codigo: 1900119709, qtde: 1 }, // Seringa 1 ml
      { codigo: 1900119733, qtde: 2 }, // Seringa 5 ml
      { codigo: 1900119725, qtde: 1 }, // Seringa 10 ml
      { codigo: 1900588466, qtde: 3 }, // Touca
      { codigo: 1900588806, qtde: 1 }, // Oclusor
      { codigo: 76449580, qtde: 1 } ,  // Fio mononylon
      { codigo: 74311808, qtde: 1 }    // Lente intra-ocular
   ],

   equip: [
      { codigo: "EQ10", qtde: 1 },
      { codigo: "EQ11", qtde: 1 },
      { codigo: "EQ05", qtde: 1 },
   ],
   taxas: [
      { codigo: "60025182",qtde:1},
      { codigo: "60023147",qtde:1},
   ]
};
const facectomia_amb = {
   controlado: [
      { codigo: 90524845, qtde: 1 ,und: "com",} // Valium (código original do medicamento)
   ],
   profissional:  { codigo: 17311032299},//Dr. Amauri de Oliveira
   // { codigo: 17311008170}//Dr. Tomé Lucas Pereira Filho
   medicamentos: [
      { codigo: 90122704, qtde: 1, und: "fa" },
      { codigo: 90302370, qtde: 1, und: "amp" },
      { codigo: 90003551, qtde: 1, und: "amp" },
      { codigo: 90257570, qtde: 5, und: "gr" },
      { codigo: 90123255, qtde: 1, und: "bols" },
      { codigo: 90047494, qtde: 10, und: "ml" },
      { codigo: 90372530, qtde: 1, und: "bols" },
      { codigo: 90175212, qtde: 1, und: "fa" },
      { codigo: 90297512, qtde: 10, und: "gts" },
      { codigo: 90297300, qtde: 10, und: "gts" },
      // { codigo: 90524845, qtde: 1, und: "com" },
      { codigo: 90528255, qtde: 1, und: "com" },
      { codigo: 90512057, qtde: 1, und: "amp" },
      { codigo: 90008332, qtde: 1, und: "fa" },
      { codigo: 90573633, qtde: 1, und: "amp" },
      { codigo: 90297490, qtde: 1, und: "g" }
   ],
   materiais: [
      { codigo: 1900178616, qtde: 1, und: "kit" },
      { codigo: 1900180734, qtde: 2, und: "un" },
      { codigo: 1900101265, qtde: 1, und: "un" },
      { codigo: 1900049204, qtde: 1, und: "un" },
      { codigo: 1900588440, qtde: 10, und: "un" },
      { codigo: 70223750, qtde: 1, und: "un" },
      { codigo: 1902758350, qtde: 2, und: "un" },
      { codigo: 1900587745, qtde: 4, und: "pct" },
      { codigo: 70334307, qtde: 1, und: "un" },
      { codigo: 70360758, qtde: 1, und: "un" },
      { codigo: 70360812, qtde: 1, und: "un" },
      { codigo: 1900241334, qtde: 2, und: "par" },
      { codigo: 1900591572, qtde: 3, und: "un" },
      { codigo: 1900651117, qtde: 1, und: "un" },
      { codigo: 1900119709, qtde: 1, und: "un" },
      { codigo: 1900119733, qtde: 2, und: "un" },
      { codigo: 1900119725, qtde: 1, und: "un" },
      { codigo: 1900588466, qtde: 3, und: "un" },
      { codigo: 1900588806, qtde: 1, und: "un" },
      { codigo: 76449580, qtde: 1, und: "kit" },
      { codigo: 74311808, qtde: 1 }    // Lente intra-ocular
   ],

   taxas: [
      { codigo: "60025182",qtde:1},
      { codigo: "60033681",qtde:1},
      { codigo: "60023147",qtde:1},
   ]
};
const palpebra_rec_parcial = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional:  { codigo: 17311038906},//Dr. Aldery de Oliveira
   // { codigo: 17311032299}//Dr. Amauri de Oliveira
   medicamentos: [
      { codigo: 90122704, qtde: 1 }, // Água Destilada 1000 ml
      { codigo: 90003551, qtde: 1 }, // Dexametasona
      { codigo: 90433068, qtde: 1 }, // Regencel
      { codigo: 90008375, qtde: 1 }, // Keflin Neutro
      { codigo: 90257570, qtde: 5 }, // Lidocaína Geleia
      { codigo: 90019881, qtde: 1 }, // Soro Fisiológico
      { codigo: 90397932, qtde: 1 }, // Emla Pomada
      { codigo: 90099753, qtde: 10 },// Lidocaína 2% CV
      { codigo: 90047494, qtde: 10 },// Marcaína
      { codigo: 90297300, qtde: 10 },// Anestalcon
      { codigo: 90069765, qtde: 1 }, // Nimesulida
      { codigo: 90297490, qtde: 1 }, // Maxitrol
      { codigo: 90008332, qtde: 1 }, // Kefazol
      // { codigo: 90524845, qtde: 1 }  // Valium
   ],
   materiais: [
      { codigo: 1900180734, qtde: 2 }, // Agulha
      { codigo: 1900101265, qtde: 1 }, // Campo fenestrado
      { codigo: 1900049204, qtde: 1 }, // Campo cirúrgico
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo
      { codigo: 1902758350, qtde: 2 }, // Escova
      { codigo: 1900587745, qtde: 4 }, // Compressa
      { codigo: 70360758, qtde: 1 },   // Bisturi 11
      { codigo: 70360812, qtde: 1 },   // Bisturi 15
      { codigo: 1900241334, qtde: 2 }, // Luva
      { codigo: 1900591572, qtde: 3 }, // Máscara
      { codigo: 1900651117, qtde: 1 }, // Scalp
      { codigo: 1900119709, qtde: 1 }, // Seringa 1 ml
      { codigo: 1900119733, qtde: 2 }, // Seringa 5 ml
      { codigo: 1900119725, qtde: 1 }, // Seringa 10 ml
      { codigo: 1900588466, qtde: 3 }, // Touca
      // { codigo: 1900133884, qtde: 1 }, // Fio seda 4-0
      // { codigo: 1900134260, qtde: 2 }, // Fio mononylon 6-0
      // { codigo: 1900134520, qtde: 1 }  // Fio Vicryl 8-0
   ],
   fios: [
      { codigo: 1900133884, qtde: 1 }, // Fio seda 4-0
      { codigo: 1900134260, qtde: 2 }, // Fio mononylon 6-0
      { codigo: 1900134520, qtde: 1 }  // Fio Vicryl 8-0
   ],
   taxas: [
      { codigo: "60023120",qtde:1},
   ]
};
const pterigio = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],

   profissional:  { codigo: 17311038906},//Dr. Aldery de Oliveira
   // { codigo: 17311032299}//Dr. Amauri de Oliveira
   medicamentos: [
      { codigo: 90122704, qtde: 1 }, // Água Destilada 1000 ml
      { codigo: 90003551, qtde: 1 }, // Dexametasona
      { codigo: 90433068, qtde: 1 }, // Regencel
      { codigo: 90008375, qtde: 1 }, // Keflin Neutro
      { codigo: 90257570, qtde: 5 }, // Lidocaína Geleia
      { codigo: 90123255, qtde: 1 }, // Ringer Lactato
      { codigo: 90099753, qtde: 10 },// Lidocaína 2% CV
      { codigo: 90047494, qtde: 10 },// Marcaína
      { codigo: 90297512, qtde: 10 },// Mydriacyl
      { codigo: 90297300, qtde: 10 },// Anestalcon
      { codigo: 90297490, qtde: 1 }, // Maxitrol
      { codigo: 90069765, qtde: 1 }, // Nimesulida
      // { codigo: 90524845, qtde: 1 }  // Valium
   ],
   materiais: [
      { codigo: 1900180734, qtde: 2 }, // Agulha
      { codigo: 1900101265, qtde: 1 }, // Campo fenestrado
      { codigo: 1900049204, qtde: 1 }, // Campo cirúrgico
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo
      { codigo: 1902758350, qtde: 2 }, // Escova
      { codigo: 1900587745, qtde: 4 }, // Compressa
      { codigo: 70360758, qtde: 1 },   // Bisturi 11
      { codigo: 70360812, qtde: 1 },   // Bisturi 15
      { codigo: 1900241334, qtde: 2 }, // Luva
      { codigo: 1900591572, qtde: 3 }, // Máscara
      { codigo: 1900651117, qtde: 1 }, // Scalp
      { codigo: 1900119709, qtde: 1 }, // Seringa 1 ml
      { codigo: 1900119733, qtde: 2 }, // Seringa 5 ml
      { codigo: 1900119725, qtde: 1 }, // Seringa 10 ml
      { codigo: 1900588466, qtde: 3 }, // Touca
      // { codigo: 1900133884, qtde: 1 }, // Fio seda 4-0
      // { codigo: 1900134260, qtde: 2 }, // Fio mononylon 6-0
      // { codigo: 1900134520, qtde: 1 }  // Fio Vicryl 8-0
   ],

   fios: [
      { codigo: 1900133884, qtde: 1 }, // Fio seda 4-0
      { codigo: 1900134260, qtde: 2 }, // Fio mononylon 6-0
      { codigo: 1900134520, qtde: 1 }  // Fio Vicryl 8-0
   ],
   equip: [
      { codigo: "EQ09", qtde: 1 },
      { codigo: "EQ10", qtde: 1 },
      { codigo: "EQ11", qtde: 1 },
   ],

   taxas: [
      { codigo: "60023120",qtde:1},
   ]
};
const receccao = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional: { codigo: 17311038906},//Dr. Aldery de Oliveira
   medicamentos: [
      { codigo: 90257570, qtde: 1 },  // Lidocaína Geleia 2% 30 mg
      { codigo: 90123255, qtde: 1 },  // Ringer com Lactado 500 ml
      { codigo: 90397932, qtde: 1 },  // Emla Pomada 5 gr
      { codigo: 90099753, qtde: 10 }, // Lidocaína 2% CV 20 ml
      { codigo: 90297300, qtde: 10 }, // Anestalcon Colírio 5 ml
      { codigo: 'MED40', qtde: 1 },      // Tylenol 750 mg (não cadastrado)
      { codigo: 90069765, qtde: 1 },  // Nimesulida 100 mg
      // { codigo: 90524845, qtde: 1 }   // Valium Diazepam 5 mg
   ],
   materiais: [
      { codigo: 1900180734, qtde: 1 }, // Agulha descartável 13x4,5
      { codigo: 1900588440, qtde: 40 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo p/ inf mult polifix
      { codigo: 'MAT42', qtde: 1 },       // Equipo p/ soro eurofix (não cadastrado)
      { codigo: 1900587745, qtde: 4 }, // Compressa gaze 7,5 x 7,5
      { codigo: 70360758, qtde: 1 },   // Lâmina de bisturi 11
      { codigo: 1900241334, qtde: 2 }, // Luva 7,0
      { codigo: 1900119733, qtde: 1 }, // Seringa 05 ml c/ ag
      { codigo: 1900133884, qtde: 1 }, // Fio seda preta oftalmo 4-0
      { codigo: 1900134520, qtde: 1 }  // Fio Vicryl oftalm violeta 8-0
   ],
   taxas: [
      { codigo: "60023120",qtde:1},
   ]
};
const rec_vias_lacrimais = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional: { codigo: 17311032299},//Dr. Amauri de Oliveira,
   medicamentos: [
      { codigo: 90433068, qtde: 1 }, // Regencel 10.000 UI/G
      { codigo: 90257570, qtde: 5 }, // Lidocaína Geleia 2% 30 mg
      { codigo: 90019881, qtde: 1 }, // Soro Fisiológico 250 ml
      { codigo: 90297300, qtde: 10 },// Anestalcon Colírio 5 ml
      { codigo: 'MED40', qtde: 1 },     // Tylenol 750 mg (não cadastrado)
      // { codigo: 90524845, qtde: 1 }  // Valium Diazepam 5 mg
   ],
   materiais: [
      { codigo: 1900180734, qtde: 1 }, // Agulha descartável 13x4,5
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo p/ inf mult polifix
      { codigo: 'MAT42', qtde: 1 },       // Equipo p/ soro eurofix (não cadastrado)
      { codigo: 1900587745, qtde: 4 }, // Compressa gaze 7,5 x 7,5
      { codigo: 70360758, qtde: 1 },   // Lâmina de bisturi 11
      { codigo: 70360812, qtde: 1 },   // Lâmina de bisturi 15
      { codigo: 1900241334, qtde: 2 }, // Luva 7,0
      { codigo: 1900651117, qtde: 1 }, // Scalp 21 g
      { codigo: 1900119733, qtde: 1 }, // Seringa descartável 05 ml c/ ag
      // { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      // { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],

   fios: [
      { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],
   taxas: [
      { codigo: "60023139",qtde:1},
      { codigo: "60033681",qtde:1},
   ]
};
const rec_pontos_lacrimais = {
   controlado: [],
   profissional:  { codigo: 17311038906},//Dr. Aldery de Oliveira
   // { codigo: 17311032299}//Dr. Amauri de Oliveira
   taxas: [
      { codigo: "60023090",qtde:1},
   ]
}
const parancentese_camara_aterior = {
   controlado: [],
   profissional:       { codigo: 17311038906},//Dr. Aldery de Oliveira
   // { codigo: 17311008170}//Dr. Tomé Lucas Pereira Filho
   taxas: [
      { codigo: "60023104",qtde:1},
   ]
}
const ectropio = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional:  { codigo: 17311038906},//Dr. Aldery de Oliveira
   // { codigo: 17311032299}//Dr. Amauri de Oliveira
   medicamentos: [
      { codigo: 90122704, qtde: 1 }, // Água Destilada 1000 ml
      { codigo: 90003551, qtde: 1 }, // Dexametasona 4 mg/ml
      { codigo: 90008375, qtde: 1 }, // Keflin Neutro
      { codigo: 90008332, qtde: 1 }, // Kefazol 1g
      { codigo: 90257570, qtde: 5 }, // Lidocaína Geleia 2% 30 mg
      { codigo: 90019881, qtde: 1 }, // Soro Fisiológico 250 ml
      { codigo: 90099753, qtde: 10 },// Lidocaína 2% CV 20 ml
      { codigo: 90047494, qtde: 10 },// Marcaína 0,75% 20 ml (Novabupi)
      { codigo: 90297300, qtde: 10 },// Anestalcon Colírio 5 ml
      { codigo: 90069765, qtde: 1 }, // Nimesulida 100 mg
      // { codigo: 90524845, qtde: 1 }  // Valium Diazepam 5 mg
   ],
   materiais: [
      { codigo: 1900180734, qtde: 2 }, // Agulha descartável 13x4,5
      { codigo: 1900101265, qtde: 1 }, // Campo cirúrgico fenestrado
      { codigo: 1900049204, qtde: 2 }, // Campo cirúrgico
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 2 },   // Equipo p/ inf mult polifix
      { codigo: 1902758350, qtde: 2 }, // Escova de assepsia
      { codigo: 1900587745, qtde: 4 }, // Compressa gaze 7,5 x 7,5
      { codigo: 70360758, qtde: 1 },   // Lâmina de bisturi 11
      { codigo: 70360812, qtde: 1 },   // Lâmina de bisturi 15
      { codigo: 1900241334, qtde: 2 }, // Luva 7,0
      { codigo: 1900591572, qtde: 3 }, // Máscara
      { codigo: 1900651117, qtde: 1 }, // Scalp 21 g
      { codigo: 1900119709, qtde: 1 }, // Seringa 01 ml c/ ag
      { codigo: 1900119733, qtde: 2 }, // Seringa 05 ml c/ ag
      { codigo: 1900119725, qtde: 1 }, // Seringa 10 ml c/ ag
      { codigo: 1900588466, qtde: 3 }, // Touca descartável
      { codigo: 1900588806, qtde: 1 }, // Oclusor Oftálmico Estéril
      // { codigo: 1900133884, qtde: 1 }, // Fio seda preta oftalmo 4-0
      // { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      // { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],

   fios: [
      { codigo: 1900133884, qtde: 1 }, // Fio seda preta oftalmo 4-0
      { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],
   taxas: [
      { codigo: "60023112",qtde:1},
   ]
};
const pteriogio_2 = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional: { codigo: 17311038906},//Dr. Aldery de Oliveira
   medicamentos: [
      { codigo: 90019881, qtde: 1 },  // Soro Fisiológico 250 ml
      { codigo: 90099753, qtde: 10 }, // Lidocaína 2% CV 20 ml
      { codigo: 90297300, qtde: 10 }, // Anestalcon Colírio 5 ml
      { codigo: 'MED40', qtde: 1 },      // Tylenol 750 mg (não cadastrado)
      { codigo: 90069765, qtde: 1 },  // Nimesulida 100 mg
      { codigo: 'MED43', qtde: 10 },     // Mitomicina Colírio 10 ml (não cadastrado)
      // { codigo: 90524845, qtde: 1 }   // Valium Diazepam 5 mg
   ],
   materiais: [
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo p/ inf mult polifix
      { codigo: 'MAT42', qtde: 1 },       // Equipo p/ soro microfix (não cadastrado)
      { codigo: 1900587745, qtde: 4 }, // Compressa gaze 7,5 x 7,5 (iris)
      { codigo: 70360812, qtde: 1 },   // Lâmina de bisturi 15
      { codigo: 1900241334, qtde: 2 }, // Luva 7,0
      { codigo: 1900651117, qtde: 1 }, // Scalp 21 g
      { codigo: 42, qtde: 1 },       // Seringa descartável 05 ml c/ ag plastip (não cadastrada)
      // { codigo: 1900133884, qtde: 1 }, // Fio seda preta 4-0
      // { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      // { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],

   fios: [
      { codigo: 1900133884, qtde: 1 }, // Fio seda preta 4-0
      { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],
   taxas: [
      { codigo: "60023090",qtde:1},
   ]
};
const sondagem = {
   controlado: [],
   profissional: { codigo: 17311032299},//Dr. Amauri de Oliveira,
   materiais: [
      { codigo: 1900180734, qtde: 2 }, // Agulha descartável 13 x 4,5
      { codigo: 'MAT2', qtde: 1 },       // Agulha descartável 25 x 7 (não cadastrada)
      { codigo: 1900588440, qtde: 30 },// Cotonete
      { codigo: 1900587745, qtde: 30 },// Compressa gaze 7,5 x 7,5 (iris)
      { codigo: 70360758, qtde: 1 },   // Lâmina de bisturi 11
      { codigo: 70360812, qtde: 1 },   // Lâmina de bisturi 15
      { codigo: 1900241334, qtde: 4 }, // Luva 7,0
      { codigo: 1900119709, qtde: 1 }, // Seringa descartável 01 ml c/ ag
      { codigo: 42, qtde: 1 }        // Seringa descartável 05 ml c/ ag plastip (não cadastrada)
   ],
   taxas: [
      { codigo: "60023090",qtde:1},
   ]
};
const sutura_cornea = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional:  { codigo: 17311038906},//Dr. Aldery de Oliveira
   // { codigo: 17311032299}//Dr. Amauri de Oliveira
   medicamentos: [
      { codigo: 90433068, qtde: 1 },  // Regencel 10.000 UI/G
      { codigo: 90257570, qtde: 5 },  // Lidocaína Geleia 2% 30 mg
      { codigo: 90019881, qtde: 1 },  // Soro Fisiológico 250 ml
      { codigo: 90099753, qtde: 10 }, // Lidocaína 2% CV 20 ml
      { codigo: 90297300, qtde: 10 }, // Anestalcon Colírio 5 ml
      { codigo: 'MED40', qtde: 1 },      // Tylenol 750 mg (não cadastrado)
      { codigo: 90069765, qtde: 1 },  // Nimesulida 100 mg
      // { codigo: 90524845, qtde: 1 }   // Valium Diazepam 5 mg
   ],
   materiais: [
      { codigo: 1900180734, qtde: 1 }, // Agulha descartável 13 x 4,5
      { codigo: 'MAT2', qtde: 1 },       // Agulha descartável 25 x 7 (não cadastrada)
      { codigo: 1900588440, qtde: 40 },// Cotonete
      { codigo: 1900587745, qtde: 40 },// Compressa gaze 7,5 x 7,5 (iris)
      { codigo: 70360758, qtde: 1 },   // Lâmina de bisturi 11
      { codigo: 1900241334, qtde: 4 }, // Luva 7,0
      { codigo: 'MAT42', qtde: 1 },       // Seringa descartável 05 ml c/ ag plastip (não cadastrada)
      // { codigo: 1900134260, qtde: 1 }  // Fio seda preta 6-0
   ],

   fios: [
      { codigo: 1900134260, qtde: 1 }  // Fio seda preta 6-0
   ],
   taxas: [
      { codigo: "60023120",qtde:1},
   ]
};
const ret_corp_est_camara_ant = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional: { codigo: 17311032299},//Dr. Amauri de Oliveira,
   medicamentos: [
      { codigo: 90122704, qtde: 1 }, // Água Destilada 1000 ml
      { codigo: 90003551, qtde: 1 }, // Dexametasona 4 mg/ml
      { codigo: 90433068, qtde: 1 }, // Regencel 10.000 UI/G (Epitezan)
      { codigo: 90257570, qtde: 5 }, // Lidocaína Geleia 2% 30 mg (Xylestesin)
      { codigo: 90019881, qtde: 1 }, // Soro Fisiológico 250 ml
      { codigo: 90047494, qtde: 10 },// Marcaína 0,75% 20 ml (Novabupi)
      { codigo: 90099753, qtde: 10 },// Lidocaína 2% CV 20 ml
      { codigo: 90297300, qtde: 10 },// Anestalcon Colírio 5 ml
      { codigo: 90069765, qtde: 1 }, // Nimesulida 100 mg
      // { codigo: 90524845, qtde: 1 }  // Valium Diazepam 5 mg
   ],
   materiais: [
      { codigo: 1900180734, qtde: 1 }, // Agulha descartável 13x4,5
      { codigo: 1900101265, qtde: 1 }, // Campo cirúrgico fenestrado
      { codigo: 1900049204, qtde: 2 }, // Campo cirúrgico
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo p/ inf mult polifix
      { codigo: 1902758350, qtde: 1 }, // Escova de assepsia
      { codigo: 1900587745, qtde: 4 }, // Compressa gaze 7,5 x 7,5 (iris)
      { codigo: 70360812, qtde: 1 },   // Lâmina de bisturi 15
      { codigo: 1900241334, qtde: 1 }, // Luva 7,0
      { codigo: 1900591572, qtde: 2 }, // Máscara
      { codigo: 1900651117, qtde: 1 }, // Scalp 21 g
      { codigo: 1900119733, qtde: 1 }, // Seringa descartável 05 ml c/ ag
      { codigo: 1900588466, qtde: 3 }, // Touca descartável
      // { codigo: 1900133884, qtde: 1 }, // Fio seda preta oftalmo 4-0
      // { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      // { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],

   fios: [
      { codigo: 1900133884, qtde: 1 }, // Fio seda preta oftalmo 4-0
      { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],
   taxas: [
      { codigo: "60023139",qtde:1},
   ]
};
const sutura_conjuntiva = {
   controlado: [],
   profissional: { codigo: 17311032299},//Dr. Amauri de Oliveira,
   medicamentos: [
      { codigo: 90257570, qtde: 5 },  // Lidocaína Geleia 2% 30 mg
      { codigo: 90019881, qtde: 1 },  // Soro Fisiológico 250 ml
      { codigo: 90099753, qtde: 10 }, // Lidocaína 2% CV 20 ml
      { codigo: 90297300, qtde: 10 }, // Anestalcon Colírio 5 ml
      { codigo: 'MED40', qtde: 1 }       // Tylenol 750 mg (não cadastrado)
   ],
   materiais: [
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo p/ inf mult polifix
      { codigo: 'MAT42', qtde: 1 },       // Equipo p/ soro microfix (não cadastrado)
      { codigo: 1900587745, qtde: 4 }, // Compressa gaze 7,5 x 7,5 (iris)
      { codigo: 70360758, qtde: 1 },   // Lâmina de bisturi 11
      { codigo: 1900241334, qtde: 2 }, // Luva 7,0
      { codigo: 1900651117, qtde: 1 }, // Scalp 21 g
      { codigo: 'MAT43', qtde: 2 },       // Seringa 05 ml c/ ag plastip (não cadastrada)
      // { codigo: 1900134260, qtde: 1 }  // Fio mononylon 6-0
   ],

   fios: [
      { codigo: 1900134260, qtde: 1 }  // Fio mononylon 6-0
   ],
   taxas: [
      { codigo: "60023090",qtde:1},
   ]
};
const calazio = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional: { codigo: 17311038906},//Dr. Aldery de Oliveira
   medicamentos: [
      { codigo: 90433068, qtde: 1 },  // Regencel 10.000 UI/G (Epitezan)
      { codigo: 90257570, qtde: 5 },  // Lidocaína Geleia 2% 30 mg
      { codigo: 90123255, qtde: 1 },  // Solução Ringer com Lactado 500 ml
      { codigo: 90397932, qtde: 1 },  // Emla Pomada 5 gr
      { codigo: 90099753, qtde: 10 }, // Lidocaína 2% CV 20 ml
      { codigo: 'MED40', qtde: 1 },      // Tylenol 750 mg (não cadastrado)
      { codigo: 90069765, qtde: 1 },  // Nimesulida 100 mg
      // { codigo: 90524845, qtde: 1 }   // Valium Diazepam 5 mg
   ],
   materiais: [
      { codigo: 1900180734, qtde: 1 }, // Agulha descartável 13x4,5
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo p/ inf mult polifix
      { codigo: 'MAT42', qtde: 1 },       // Equipo p/ soro eurofix (não cadastrado)
      { codigo: 1900587745, qtde: 4 }, // Compressa gaze 7,5 x 7,5 (iris)
      { codigo: 70360758, qtde: 1 },   // Lâmina de bisturi 11
      { codigo: 70360812, qtde: 1 },   // Lâmina de bisturi 15
      { codigo: 1900241334, qtde: 2 }, // Luva 7,0
      { codigo: 1900651117, qtde: 1 }, // Scalp 21 g
      { codigo: 1900119709, qtde: 1 }, // Seringa descartável 01 ml c/ ag
      { codigo: 1900119733, qtde: 2 }, // Seringa descartável 05 ml c/ ag
      // { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      // { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],

   fios: [
      { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],
   taxas: [
      { codigo: "60023090",qtde:1},
   ]
};
const tumor_orbita = {
   controlado: [],
   profissional: { codigo: 17311038906},//Dr. Aldery de Oliveira
   taxas: [
      { codigo: "60023147",qtde:1},
   ]
}
const tumor_conjuntiva = {
   controlado: [
      { codigo: 90524845, qtde: 1 ,und: "com",} // Valium (código original do medicamento)
   ],
   profissional: { codigo: 17311038906},//Dr. Aldery de Oliveira
   medicamentos: [
      { codigo: 90433068, qtde: 1 },  // Regencel 10.000 UI/G (Epitezan)
      { codigo: 90019881, qtde: 1 },  // Soro Fisiológico 250 ml
      { codigo: 90397932, qtde: 1 },  // Emla Pomada 5 gr
      { codigo: 90099753, qtde: 10 }, // Lidocaína 2% CV 20 ml
      { codigo: 90297300, qtde: 10 }, // Anestalcon Colírio 5 ml
      { codigo: 'MED40', qtde: 1 },      // Tylenol 750 mg (não cadastrado)
      { codigo: 90069765, qtde: 1 },  // Nimesulida 100 mg
      // { codigo: 90524845, qtde: 1 }   // Valium Diazepam 5 mg
   ],
   materiais: [
      { codigo: 1900180734, qtde: 1 }, // Agulha descartável 13x4,5
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo p/ inf mult polifix
      { codigo: 'MAT42', qtde: 1 },       // Equipo p/ soro eurofix (não cadastrado)
      { codigo: 1900587745, qtde: 4 }, // Compressa gaze 7,5 x 7,5 (iris)
      { codigo: 70360758, qtde: 1 },   // Lâmina de bisturi 11
      { codigo: 70360812, qtde: 1 },   // Lâmina de bisturi 15
      { codigo: 1900241334, qtde: 2 }, // Luva 7,0
      { codigo: 1900651117, qtde: 1 }, // Scalp 21 g
      { codigo: 1900119733, qtde: 1 }, // Seringa descartável 05 ml c/ ag
      // { codigo: 1900133884, qtde: 1 }, // Fio seda preta oftalmo 4-0
      // { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      // { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],

   fios: [
      { codigo: 1900133884, qtde: 1 }, // Fio seda preta oftalmo 4-0
      { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],
   taxas: [
      { codigo: "60023090",qtde:1},
   ]
};
const blefero = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional:  { codigo: 17311032299},//Dr. Amauri de Oliveira
   // { codigo: 17311038906}//Dr. Aldery de Oliveira
   medicamentos: [
      { codigo: 90433068, qtde: 1 },  // Regencel 10.000 UI/G (Epitezan)
      { codigo: 90257570, qtde: 5 },  // Lidocaína Geleia 2% 30 mg
      { codigo: 90019881, qtde: 1 },  // Soro Fisiológico 250 ml
      { codigo: 90397932, qtde: 1 },  // Emla Pomada 5 gr
      { codigo: 90099753, qtde: 10 }, // Lidocaína 2% CV 20 ml
      { codigo: 90297300, qtde: 10 }, // Anestalcon Colírio 5 ml
      { codigo: 'MED40', qtde: 1 },      // Tylenol 750 mg (não cadastrado)
      { codigo: 90069765, qtde: 1 },  // Nimesulida 100 mg
      // { codigo: 90524845, qtde: 1 }   // Valium Diazepam 5 mg
   ],
   materiais: [
      { codigo: 1900180734, qtde: 1 }, // Agulha descartável 13 x 4,5
      { codigo: 'MAT2', qtde: 1 },       // Agulha descartável 25 x 7 (não cadastrada)
      { codigo: 1900588440, qtde: 40 },// Cotonete
      { codigo: 1900587745, qtde: 40 },// Compressa gaze 7,5 x 7,5 (iris)
      { codigo: 70360758, qtde: 1 },   // Lâmina de bisturi 11
      { codigo: 70360812, qtde: 1 },   // Lâmina de bisturi 15
      { codigo: 1900241334, qtde: 4 }, // Luva 7,0
      { codigo: 'MAT43', qtde: 1 },       // Seringa descartável 05 ml c/ ag plastip (não cadastrada)
      // { codigo: 1900134520, qtde: 1 }, // Fio seda preta 8-0
      // { codigo: 1900134260, qtde: 1 }  // Fio mononylon 6-0
   ],

   fios: [
      { codigo: 1900134520, qtde: 1 }, // Fio seda preta 8-0
      { codigo: 1900134260, qtde: 1 }  // Fio mononylon 6-0
   ],
   taxas: [
      { codigo: "60023112",qtde:1},
      { codigo: "60033681",qtde:1},
   ]
};
const biopsia_palpebra = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional: { codigo: 17311038906},//Dr. Aldery de Oliveira
   medicamentos: [
      { codigo: 90433068, qtde: 1 },  // Regencel 10.000 UI/G (Epitezan)
      { codigo: 90019881, qtde: 1 },  // Soro Fisiológico 250 ml
      { codigo: 90397932, qtde: 1 },  // Emla Pomada 5 gr
      { codigo: 90099753, qtde: 10 }, // Lidocaína 2% CV 20 ml
      { codigo: 90297300, qtde: 10 }, // Anestalcon Colírio 5 ml
      { codigo: 90297610, qtde: 3 },  // Vigamox 5 mg/ml
      // { codigo: 90524845, qtde: 1 }   // Valium Diazepam 5 mg
   ],
   materiais: [
      { codigo: 1900180734, qtde: 2 }, // Agulha descartável 13x4,5
      { codigo: 1900101265, qtde: 1 }, // Campo cirúrgico fenestrado
      { codigo: 1900049204, qtde: 1 }, // Campo cirúrgico
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo p/ inf mult polifix
      { codigo: 1902758350, qtde: 2 }, // Escova de assepsia
      { codigo: 1900587745, qtde: 4 }, // Compressa gaze 7,5 x 7,5 (iris)
      { codigo: 70360758, qtde: 1 },   // Lâmina de bisturi 11
      { codigo: 70360812, qtde: 1 },   // Lâmina de bisturi 15
      { codigo: 1900241334, qtde: 2 }, // Luva 7,0
      { codigo: 1900591572, qtde: 3 }, // Máscara
      { codigo: 1900651117, qtde: 1 }, // Scalp 21 g
      { codigo: 1900119733, qtde: 1 }, // Seringa descartável 05 ml c/ ag
      { codigo: 1900588466, qtde: 3 }, // Touca descartável
      // { codigo: 1900133884, qtde: 1 }, // Fio seda preta oftalmo 4-0
      // { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      // { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],

   fios: [
      { codigo: 1900133884, qtde: 1 }, // Fio seda preta oftalmo 4-0
      { codigo: 1900134260, qtde: 1 }, // Fio mononylon 6-0
      { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],
   taxas: [
      { codigo: "60023090",qtde:1},
   ]
};
const estrabismo = {
   controlado: [
      { codigo: 90524845, qtde: 1,und: "com", } // Valium (código original do medicamento)
   ],
   profissional:  { codigo: 17311032299},//Dr. Amauri de Oliveira
   // { codigo: 17311008170}//Dr. Tomé Lucas Pereira Filho
   medicamentos: [
      { codigo: 90302370, qtde: 1 },  // Propofol 10mg/ml x 20 ml (Propovan)
      { codigo: 90008375, qtde: 1 },  // Keflin Neutro
      { codigo: 90257570, qtde: 5 },  // Lidocaína Geleia 2% 30 mg
      { codigo: 90123255, qtde: 1 },  // Ringer com Lactado 500 ml
      { codigo: 90019881, qtde: 1 },  // Soro Fisiológico 250 ml
      { codigo: 90099753, qtde: 10 }, // Lidocaína 2% CV 20 ml
      { codigo: 90047494, qtde: 10 }, // Marcaína 0,75% 20 ml
      { codigo: 90297300, qtde: 10 }, // Anestalcon Colírio 5 ml
      // { codigo: 90524845, qtde: 1 }   // Valium Diazepam 5 mg
   ],
   materiais: [
      { codigo: 1900180734, qtde: 2 }, // Agulha descartável 13x4,5
      { codigo: 1900588440, qtde: 10 },// Cotonete
      { codigo: 70223750, qtde: 1 },   // Equipo p/ inf mult polifix
      { codigo: 'MAT42', qtde: 1 },       // Equipo p/ soro eurofix (não cadastrado)
      { codigo: 1900587745, qtde: 4 }, // Compressa gaze 7,5 x 7,5 (iris)
      { codigo: 70360758, qtde: 1 },   // Lâmina de bisturi 11
      { codigo: 70360812, qtde: 1 },   // Lâmina de bisturi 15
      { codigo: 1900241334, qtde: 2 }, // Luva 7,0
      { codigo: 1900651117, qtde: 1 }, // Scalp 21 g
      { codigo: 1900119709, qtde: 1 }, // Seringa descartável 01 ml c/ ag
      { codigo: 1900119733, qtde: 2 }, // Seringa descartável 05 ml c/ ag
      { codigo: 1900133884, qtde: 1 }, // Fio seda preta oftalmo 4-0
      { codigo: 1900137936, qtde: 1 }, // Fio mononylon 10-0
      { codigo: 1900134520, qtde: 1 }  // Fio Vicryl Oftalm Violeta 8-0
   ],
   gases: [
      { codigo: "GS02", qtde: 1 }        // Oxigênio (não cadastrado)
   ],
   taxas: [
      { codigo: "60023139",qtde:1},
   ]
};
const map_tono_sedacao = {
   profissional:       { codigo: 17311032299},//Dr. Amauri de Oliveira
   // { codigo: 17311038906}//Dr. Aldery de Oliveira
   gases: [
      { codigo: "GS02", qtde: 1 }        // Oxigênio (não cadastrado)
   ],
   taxas: [
      { codigo: "60023090",qtde:1},
   ]
};
const facectomia_antiga = {
   profissional:       { codigo: 17311032299},//Dr. Amauri de Oliveira
   // { codigo: 17311038906}//Dr. Aldery de Oliveira
   // { codigo: 17311008170}//Dr. Tomé Lucas Pereira Filho
   medicamentos: [
      { codigo: 90122704, qtde: 1, und: "fa" },   // Água Destilada 1000 ml
      { codigo: 90302370, qtde: 1, und: "amp" },  // Propovan (Propofol)
      { codigo: 90003551, qtde: 1, und: "amp" },  // Dexametasona 4 mg/ml
      { codigo: 90008375, qtde: 1, und: "amp" },  // Keflin Neutro
      { codigo: 90257570, qtde: 5, und: "gr" },   // Lidocaína Geleia 2%
      { codigo: 90123255, qtde: 1, und: "bols" }, // Ringer com Lactado 500 ml
      { codigo: 90047494, qtde: 10, und: "ml" },  // Marcaína 0,75% 20 ml
      { codigo: 90372530, qtde: 1, und: "bols" }, // BSS 500 ml
      { codigo: 90175212, qtde: 1, und: "fa" },   // Miostat
      { codigo: 90297512, qtde: 10, und: "gts" }, // Mydriacyl
      { codigo: 90297300, qtde: 10, und: "gts" }, // Anestalcon
      { codigo: 90524845, qtde: 1, und: "com" }   // Valium
   ],
   materiais: [
      { codigo: 1900178616, qtde: 1, und: "kit" }, // Metilcelulose 2% 2,5 ml
      { codigo: 1900180734, qtde: 2, und: "un" },  // Agulha 13x4,5
      { codigo: 1900588440, qtde: 10, und: "un" }, // Cotonete
      { codigo: 70223750, qtde: 1, und: "un" },    // Equipo mult polifix
      { codigo: 'MAT42', qtde: 1, und: "un" },        // Equipo soro eurofix (não cadastrado)
      { codigo: 1900587745, qtde: 4, und: "pct" }, // Compressa gaze 7,5 x 7,5
      { codigo: 70334307, qtde: 1, und: "un" },    // Injetor p/ implante de LIO
      { codigo: 70360758, qtde: 1, und: "un" },    // Bisturi 11
      { codigo: 70360812, qtde: 1, und: "un" },    // Bisturi 15
      { codigo: 1900241334, qtde: 2, und: "par" }, // Luva 7,0
      { codigo: 1900651117, qtde: 1, und: "un" },  // Scalp 21 g
      { codigo: 1900119709, qtde: 1, und: "un" },  // Seringa 01 ml c/ ag
      { codigo: 1900119733, qtde: 2, und: "un" },  // Seringa 05 ml c/ ag
      { codigo: 1900119725, qtde: 1, und: "un" },  // Seringa 10 ml c/ ag
      { codigo: 74311808, qtde: 1, und: "un" },    // Lente intra-ocular

   ],
   fios:[
      { codigo: 76449580, qtde: 1, und: "kit" }// Fio mononylon preto (Kit catarata Shalon)
   ],
   taxas: [
      { codigo: "60023147",qtde:1},
      { codigo: "60025182",qtde:1},
   ]
};


const tiposCirurgia = [
   { codigo: "EY01", descricao: "Injeção intravítrea - Eylia", dados: eylia },
   { codigo: "AV01", descricao: "Injeção intravítrea - Avastin", dados: avastim },
   { codigo: "FC01", descricao: "Facectomia", dados: facectomia },
   { codigo: "FC02", descricao: "Facectomia Ambulatorial", dados: facectomia_amb },
   { codigo: "PL01", descricao: "Pálpebra - Ressecção Parcial", dados: palpebra_rec_parcial },
   { codigo: "PT01", descricao: "Pterígio  & Autotransplante", dados: pterigio },
   { codigo: "PT02", descricao: "Pterígio (Técnica 2)", dados: pteriogio_2 },
   { codigo: "RC01", descricao: "Ressecção", dados: receccao },
   { codigo: "VL01", descricao: "Reconstrução de Vias Lacrimais", dados: rec_vias_lacrimais },
   { codigo: "VL02", descricao: "Reconstrução de Pontos Lacrimais", dados: rec_pontos_lacrimais },
   { codigo: "EC01", descricao: "Ectrópio", dados: ectropio },
   { codigo: "SD01", descricao: "Sondagem", dados: sondagem },
   { codigo: "SC01", descricao: "Sutura de Córnea", dados: sutura_cornea },
   { codigo: "SA01", descricao: "Retirada de Corpo Estranho - Câmara Anterior", dados: ret_corp_est_camara_ant },
   { codigo: "SJ01", descricao: "Sutura de Conjuntiva", dados: sutura_conjuntiva },
   { codigo: "CZ01", descricao: "Calázio", dados: calazio },
   { codigo: "TC01", descricao: "Tumor de Conjuntiva", dados: tumor_conjuntiva },
   { codigo: "TC02", descricao: "Tumor de Orbita", dados: tumor_orbita },
   { codigo: "BL01", descricao: "Blefaroplastia", dados: blefero },
   { codigo: "BP01", descricao: "Biópsia de Pálpebra", dados: biopsia_palpebra },
   { codigo: "ES01", descricao: "Estrabismo", dados: estrabismo },
   { codigo: "MT01", descricao: "MAP / Tonometria com Sedação", dados: map_tono_sedacao },
   { codigo: "FC99", descricao: "Facectomia (Modelo Antigo)", dados: facectomia_antiga },
   { codigo: "PR01", descricao: "parancentese_camara_aterior", dados: parancentese_camara_aterior },
];
const tiposCirurgiaOrdenado = [...tiposCirurgia].sort((a, b) =>
 a.descricao.localeCompare(b.descricao, 'pt-BR')
);
// opção padrão
const optDefault = document.createElement("option");
optDefault.value = "";
optDefault.textContent = "Selecione...";
select.appendChild(optDefault);

tiposCirurgiaOrdenado.forEach(c => {
   const option = document.createElement("option");
   option.value = c.codigo;
   option.textContent = c.descricao;
   select.appendChild(option);
});



// ALTERANDO QUANTIDADE NA LISTA DE MEDICAMENTO
function renderTable(list, tableId, hasUn = true) {
   const tbody = document.getElementById(tableId);
   list.forEach(item => {
      const row = `
               <tr>
                 <td>${item.descricao}</td>
                 <td>
                   <input
                     type="text"
                     class="input-qty"
                     data-codigo="${item.codigo}"
                   >
                 </td>
                 ${hasUn ? `<td>${item.und ?? ""}</td>` : `<td></td>`}
               </tr>
             `;
      tbody.innerHTML += row;
   });
}

// Executa a renderização
renderTable(dados.medicamento, 'med-table');
renderTable(dados.controlado, 'control-table');
renderTable(dados.materiais, 'mat-table');
renderTable(dados.fios, 'fios-table');
renderTable(dados.sol, 'sol-table');
renderTable(dados.taxas, 'taxas-table', false);
renderTable(dados.gases, 'gases-table', false);
renderTable(dados.equip, 'equip-table', false);
renderTable(dados.outros, 'outros-table', false);


// TIPO DE CIRURGIA
document.getElementById('tipoCirurgia').addEventListener('change', function () {
   const codigoTipo = this.value;

   // limpa tudo
   document.querySelectorAll('.input-qty').forEach(i => i.value = "");

   // acha a cirurgia selecionada
   const cirurgia = tiposCirurgia.find(t => t.codigo === codigoTipo);
   if (!cirurgia || !cirurgia.dados) return;

   const med= profissionais.find(p=>p.codigo===cirurgia.dados.profissional.codigo)
   if (med){
      medicoSelect.value=med.crm
      crm.value=med.crm
   }

   const { medicamentos = [], materiais = [], gases = [], taxas = [], fios = [], equip = [], controlado = [] } = cirurgia.dados;

   // junta tudo que tem qtde
   const itens = [...medicamentos, ...materiais, ...gases, ...taxas, ...fios, ...equip, ...controlado];
   itens.forEach(item => {
      const input = document.querySelector(
       `.input-qty[data-codigo="${item.codigo}"]`
      );
      if (input) {
         input.value = item.qtde;
      }
   });
});
