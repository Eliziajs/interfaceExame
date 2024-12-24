import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ListMedidasService  {

  getMedidasCavitaria(){
    return [
      "1. Os diâmetros cavitários esquerdos estão normais.",
      "2. Os diâmetros cavitários esquerdos estão aumentados:",
      "3. O diâmetro do Ventrículo esquerdo está normal e do átrio esquerdo aumentado.",
      "4. Não foi possível analisar devido à dificuldade técnica."
    ];
  }


  getMedidasVE() {
    return [
      "1. As espessuras parietais do VE estão normais",
      "2. As espessuras parietais do VE estão Aumentadas, com padrão de hipertrofia concêntrica",
      "3. As espessuras parietais do VE estão muito aumentadas, com padrão de hipertrofia concêntrica",
      "4. Há importante aumento assimétrico da espessura do Septo",
      "5. As medidas não foram realizadas devido à dificuldade do tórax",
      "6. As medidas não foram realizadas devido a angulação cardíaca.",
      "7. As medidas ao unidimensional foram realizadas.",
      "8. Não foi possível analisar devido à dificuldade técnica."

    ];
  }
  getFuncaoSistolica() {
    return [
      "1. A função sistólica global do VE está preservada em repouso.",
      "2. A função sistólica global do VE está levemente diminuída.",
      "3. A função sistólica global do VE está leve/moderadamente diminuída.",
      "4. A função sistólica global do VE está moderadamente diminuída.",
      "5. A função sistólica global do VE está moderada/severamente diminuída.",
      "6. A função sistólica global do VE  está severamente diminuída.",
      "7. A função sistólica global do Ventrículo esquerdo está diminuída, porém com avaliação imprecisa em decorrência de das anormalidades segmentares",
      "8. A função sistólica global do VE está preservada, embora esta medida seja imprecisa devido às anormalidades segmentares",
      "9. Não foi possível analisar devido à dificuldade técnica."

    ]
  }
  getContratilidadeSegmentar() {
    return [
      "1. A análise da contratilidade segmentar do VE não mostra anormalidades",
      "2. A análise da contratilidade segmentar do VE está anormal, e evidencia:",
      "3. A contratilidade segmentar do VE ficou com análise prejudicada.",
      "4. Não foi possível analisar devido à dificuldade técnica.",

    ]
  }
  getFuncaoDiastolica() {
    return [
      "1. Fluxo mitral e doppler tecidual evidenciam padrão normal de distensibilidade do VE.",
      "2. A análise da distensibilidade do VE ficou prejudicada devido à:     ",
      "3. Fluxo mitral e doppler tecidual evidenciam padrão de diminuição da distensibilidade do VE tipo I",
      "4. Fluxo mitral e doppler tecidual evidenciam padrão pseudo-normal para a distensibilidade do VE.",
      "5. Fluxo mitral doppler tecidual evidenciam padrão restritivo para  a distensibilidade do VE.",
      "6. A rampa EF lenta da valva mitral, indica diminuição da distensibilidade do VE.",
      "7. Presença de sinais de aumento:__________________ da pressão de enchimento do ventrículo esquerdo",
      "8. Fluxo mitral e doppler tecidual evidenciam padrão de diminuição da distensibilidade do VE (Disfunção diastólica) tipo I. Há presença de parâmetros de aumento das pressões de enchimento do ventrículo esquerdo.",
      "Não foi possível analisar devido à dificuldade técnica."
    ]
  }
  getCavidadesDireitas() {
    return [
      "1.  Cavidades direitas com diâmetros e volumes normais. Função sistólica de VD normal",
      "2. Átrio direito com diâmetro e volume: ___________. Ventrículo direito com diâmetro e volume: __________ Função sistólica do VD : ___________",
      "3.Não foi possível analisar devido à dificuldade técnica."
    ]
  }
  getAorta() {
    return [
      "1. Aorta com diâmetros normais da raiz e seio de Valsalva , crossa e segmento torácico",
      "2. Raiz da Aorta ectasiada",
      "3. Aorta com diâmetros aumentados: _________________ configurando aneurisma de aorta: _______________",
      "4.Não foi possível analisar devido à dificuldade técnica."
    ]
  }
  getValvulaAortica() {
    return [
      "1. Válvula Aórtica com Aspecto normal. Boa abertura sistólica. Ausência de gradiente patológico. Fluxo normal.",
      "2. Válvula aórtica de aspecto: __________, abertura sistólica:____________. Gradiente aórtico Max= ______ mmHg, Med= _________ mmHg , área valvar estimada= ________ cm configurando estenose aórtica.",
      "3. Sinais de disfunção sistólica do VE.",
      "4.Não foi possível analisar devido à dificuldade técnica."
    ]
  }
  getMitral() {
    return [
      "1. Válvula Mitral com Aspecto normal. Boa mobilidade dos folhetos, ausência de refluxo.",
      "2. Válvula Mitral com Aspecto: __________ mobilidade dos folhetos: ___________ Fluxo:___________.",
      "3. Folheto mitral anterior afastado do septo, indicando gravidade da disfunção miocárdica.",
      "4. Válvula Mitral espessada, redução de mobilidade, abertura em 'dome', com padrão reumático.",
      "5. Presença de prolapso mitral sem degeneração mixomatosa: ausência de refluxo.",
      "6. Rampa EF lenta, indicando diminuição da distensibilidade do VE.",
      "7. Dupla lesão mitral, com predominância de ______________________.",
      "8. Afastada do septo e presença do ponto B (aumento da Pd2 do VE,e disfunção sistolica).",
      "9.  Leve posteriorização sistólica sem critérios para prolapso.",
      "10. Vibrações diastólicas do folheto anterior(insuficiência aórtica).",
      "11. Calcificação do anel posterior.",
      "12.Não foi possível analisar devido à dificuldade técnica."
    ]
  }
  getTricuspide() {
    return [
      "1. Válvula Tricúspide com Aspecto normal. Refluxo mínimo, PSAP estimada em : < 26 mmHg , Configurando pressão sistólica pulmonar normal: Veia cava inferior normodistendida, variação respiratória normal.",
      "2. Válvula Tricúspide com Aspecto: __________ Refluxo:__________, PSAP estimada em: _______ mmHg , Configurando Hipertensão sistólica pulmonar: _____________.",
      "3. Aneurisma do septo interatrial:______________ comunicação interatrial: _________________.",
      "4.Não foi possível analisar devido à dificuldade técnica."
    ]
  }
  getValvulaPulmonar() {
    return [
      "1. Não visualizada.",
      "2. Presença de estenose da Válvula pulmonar.",
      "3. Refluxo valvar pulmonar:____________ Sinais de Hipertensão arterial pulmonar.",
      "4.Não foi possível analisar devido à dificuldade técnica.",
    ]
  }
  getPericardio() {
    return [
      "1. Pericárdio com aspecto normal. Deslizamento normal, Líquido fisiológico.",
      "2. Pericárdio com aspecto: ___________ Deslizamento: ___________ Derrame pericárdico: ______________.",
      "3.Não foi possível analisar devido à dificuldade técnica."
    ]
  }
  getCava() {
    return [
      "1. Veia Cava Inferior normodistendida, variação respiratória Normal.",
      "2. Veia Cava Inferior Hiperdistendida, variação respiratória Reduzida.",
      "3. Veia Cava Inferior hipodistendida.",
      "4. Não foi possível analisar devido à dificuldade técnica.",

    ]
  }

}
