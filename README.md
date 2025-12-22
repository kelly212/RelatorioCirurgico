# Relatório Cirúrgico Completo - Centro Oftalmológico

## Descrição
Este é um sistema web para geração de relatórios cirúrgicos. A aplicação permite preencher formulários detalhados de procedimentos cirúrgicos oftalmológicos, incluindo informações do paciente, detalhes da cirurgia, materiais utilizados, medicamentos administrados e monitoramento anestésico.

## Funcionalidades

### 1. **Cabeçalho e Informações do Paciente**
- Dados completos do paciente (nome, categoria, diagnóstico)
- Informações do quarto e registro
- Seleção do tipo de cirurgia com catálogo pré-definido
- Detalhes da data, horários e cálculo automático de duração
- Informações da equipe médica (cirurgião, auxiliares, anestesista)

### 2. **Seleção Inteligente de Cirurgias**
- Catálogo com mais de 20 tipos de cirurgias oftalmológicas
- Pré-configuração automática de:
  - Medicamentos necessários
  - Materiais cirúrgicos
  - Fios cirúrgicos
  - Taxas aplicáveis
  - Profissional responsável padrão

### 3. **Monitoramento Anestésico**
- Boletim de anestesia completo
- Grade visual para monitoramento trans-cirúrgico
- Registro de agentes anestésicos e técnicas utilizadas

### 4. **Controle de Materiais e Medicamentos**
- Sistema de inventário dividido por categorias:
  - Medicamentos regulares e controlados
  - Materiais cirúrgicos
  - Fios cirúrgicos
  - Gases médicos
  - Equipamentos especiais
  - Soluções e outros insumos
  - Taxas cirúrgicas

### 5. **Relatório Automático**
- Geração automática do resumo do ato cirúrgico
- Campos pré-preenchidos baseados na cirurgia selecionada
- Assinaturas digitais para equipe médica

### 6. **Exportação e Impressão**
- Botão para impressão direta do relatório
- Geração de PDF com formatação otimizada
- Layout A4 pronto para arquivamento

## Tipos de Cirurgias Disponíveis

### Injeções Intravítreas
- Injeção intravítrea - Eylia
- Injeção intravítrea - Avastin

### Cirurgias de Catarata
- Facectomia
- Facectomia Ambulatorial
- Facectomia (Modelo Antigo)

### Cirurgias Palpebrais
- Pálpebra - Ressecção Parcial
- Ectrópio
- Blefaroplastia
- Biópsia de Pálpebra
- Calázio

### Cirurgias Conjuntivais e Corneanas
- Pterígio & Autotransplante
- Pterígio (Técnica 2)
- Sutura de Córnea
- Sutura de Conjuntiva
- Tumor de Conjuntiva

### Cirurgias de Vias Lacrimais
- Reconstrução de Vias Lacrimais
- Reconstrução de Pontos Lacrimais
- Sondagem

### Outros Procedimentos
- Ressecção
- Retirada de Corpo Estranho - Câmara Anterior
- Tumor de Órbita
- Estrabismo
- MAP / Tonometria com Sedação
- Paracentese de Câmara Anterior

## Tecnologias Utilizadas

- **HTML5**: Estrutura do documento
- **CSS3**: Estilização com Grid Layout e Flexbox
- **JavaScript**: Lógica de interação e dinâmica
- **SVG**: Gráficos para monitoramento anestésico
- **Media Queries**: Otimização para impressão

## Recursos Técnicos

### Layout Responsivo
- Design otimizado para impressão em A4
- Grade CSS para organização dos campos
- Breakpoints para evitar quebra de páginas indesejada

### Funcionalidades JavaScript
- Cálculo automático da duração da cirurgia
- Auto-resize da área de texto do resumo
- Pré-seleção automática de itens baseada na cirurgia
- Validação e formatação de dados
- Gestão de catálogos de medicamentos e materiais

### Catálogos Integrados
- **Medicamentos**: 60+ itens com códigos e unidades
- **Materiais**: 40+ itens cirúrgicos
- **Fios cirúrgicos**: 30+ tipos diferentes
- **Profissionais**: Cadastro de cirurgiões com CRM

## Instruções de Uso

1. **Preenchimento do Cabeçalho**
   - Informar dados do paciente
   - Selecionar o tipo de cirurgia
   - Preencher horários de início e fim

2. **Seleção da Equipe**
   - Escolher cirurgião (CRM preenchido automaticamente)
   - Informar auxiliares e anestesista

3. **Monitoramento Anestésico**
   - Preencher boletim de anestesia
   - Registrar parâmetros vitais
   - Informar agentes e técnicas utilizadas

4. **Controle de Materiais**
   - Quantidades pré-preenchidas conforme cirurgia
   - Ajustar conforme necessário
   - Verificar itens controlados

5. **Geração do Relatório**
   - Revisar resumo automático
   - Clicar em "IMPRIMIR / GERAR PDF"
   - Assinar cópia impressa

## Otimizações para Impressão

- Remoção de elementos de interface durante a impressão
- Manutenção de cores de fundo para melhor legibilidade
- Ajuste de margens para padrão A4
- Preservação da estrutura das tabelas

## Estrutura de Arquivos
relatorio-cirurgico.html # Arquivo principal
(Contém todo o código HTML, CSS e JavaScript)


## Compatibilidade

- Navegadores modernos (Chrome, Firefox, Edge)
- Sistemas de impressão padrão
- Formato PDF via impressão do navegador

## Personalização

O sistema pode ser facilmente personalizado através de:

1. **Catálogo de Cirurgias**: Adicionar novos procedimentos em `tiposCirurgia`
2. **Medicamentos e Materiais**: Expandir os arrays `dados.medicamento` e `dados.materiais`
3. **Profissionais**: Atualizar array `profissionais`
4. **Estilos**: Modificar variáveis CSS em `:root`

## Observações

- Todos os dados são processados localmente no navegador
- Nenhuma informação é transmitida para servidores externos
- Recomenda-se salvar o relatório gerado em PDF para arquivamento
- Os códigos de medicamentos seguem padrão interno da instituição


## Licença
Uso interno da instituição.
