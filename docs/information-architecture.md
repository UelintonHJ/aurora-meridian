# Aurora Meridian - Information Architecture

## Status

Proposed

## Purpose

Definir a arquitetura de informação do site institucional da Aurora Meridian antes da implementação das páginas e do layout definitivo.

Este documento é a fonte de verdade para:

- navegação;
- hierarquia;
- URLs;
- relacionamento entre páginas;
- breadcrumbs;
- indexação;
- public/private boundaries;
- progressive disclosure.

---

# 01 - Primary Information Architecture

```text
HOME
│
├── ABOUT
├── APPROACH
├── STRATEGIES
│   ├── MACRO
│   ├── RELATIVE VALUE
│   ├── CREDIT
│   └── GLOBAL
├── RESEARCH
├── CULTURE
├── CAREERS
├── CONTACT
└── REQUEST ACCESS
```

---

# 02 - Institutional Infrastructure

```text
LEGAL
PRIVACY
TERMS
DISCLOSURES
INVESTOR ACCESS
```

Essas áreas pertencem à infraestrutura institucional e não devem ocupar a navegação editorial principal.

---

# 03 - Sitemap

```text
/
├── about/
├── approach/
├── strategies/
│   ├── macro/
│   ├── relative-value/
│   ├── credit/
│   └── global/
├── research/
├── culture/
├── careers/
├── contact/
├── request-access/
├── investor-access/
├── legal/
├── privacy/
├── terms/
└── disclosures/
```

---

# 04 - Page Responsibilities

`/`
Responsabilidade:

Apresentar a Aurora Meridian, sua tese institucional, capacidades, processo de investimento, research e caminho para relacionamento.

Pergunta:

> "Quem é a Aurora Meridian e por que devo continuar explorando?"

---

`/about`
Responsabilidade:

Explicar identidade, história, posicionamento, estrutura institucional, origem brasileira e perspectiva global.

Pergunta:

> Quem é a instituição?

---

`/approach`
Responsabilidade:

Explicar a filosofia de investimento e o processo:

```text
Observe
Challenge
Structure
Allocate
Monitor
Adapt
```

Também apresenta:

```text
Macro Thinking
Trade Structuring
Risk Management
```

Pergunta:

> Como a Aurora Meridian pensa e transforma análise em decisão?

---

`/strategies`

Responsabilidade:

Apresentar a plataforma de investimento.

Capacidades:

```text
Macro
Rates & FX
Credit
Global Opportunities
```

Estratégias apresentadas:

```text
Aurora Meridian Macro
Aurora Meridian Relative Value
Aurora Meridian Credit
Aurora Meridian Global
```

Pergunta:

> O que a Aurora Meridian faz?

---

`/strategies/macro`
Responsabilidade:

Apresentar a estratégia macro multiativos.

---

`/strategies/relative-value`
Responsabilidade:

Apresentar a estratégia de valor relativo.

---

`strategies/credit`
Responsabilidade:

Apresentar a estratégia de crédito.

---

`/strategies/global`
Responsabilidade:

Apresentar a estratégia global.

---

`/research`
Responsabilidade:

Apresentar o research público da Aurora Meridian.

Formatos:

- Market Perspectives;
- Cross-Asset Review;
- Brazil Monitor;
- Global Macro Brief;
- Quarterly Outlook.

Pergunta:
> Como a instituição demonstra sua forma de pensar?

---

`/culture`
Responsabilidade:

Apresentar cultura, princípios e pessoas.

Princípios:

```text
Intellectual Independence
Accountability
Collaboration
Integrity
```

Pergunta:
> Que tipo de organização existe por trás da gestão?

---

`/careers`
Responsabilidade:

Apresentar oportunidades profissionais, cultura de trabalho e critérios para pessoas interessadas em fazer parte da organização.

---

`/contact`
Responsabilidade:

Apresentar os canais institucionais de contato.

Não deve funcionar como landing page genérica de suporte.

---

`/request-access`
Responsabilidade:

Iniciar relacionamento institucional com investidores elegíveis.

Não representa compra ou contratação automática de produto.

CTA:

> Solicitar acesso

---

`/investor-access`
Responsabilidade:

Explicar o modelo de acesso institucional e a separação entre comunicação pública e informações específicas de investidores.

---

`/legal`
Responsabilidade:

Centralizar informações jurídicas institucionais.

---

`/privacy`
Responsabilidade:

Apresentar a Política de Privacidade.

---

`/terms`
Responsabilidade:

Apresentar os Termos de Uso.

---

`/disclosures`
Responsabilidade:

Centralizar disclosures e informações regulatórias aplicáveis.

---

# 05 - Primary Navigation

A navegação principal deve permanecer enxuta:

```text
About
Approach
Strategies
Research
Culture
Careers
Contact
```

CTA separado:

```text
Request access
```

A infraestrutura jurídica não pertence à navegação principal.

---

# 06 - Footer Navigation

O footer deve conter:

```text
Institutional
├── About
├── Approach
├── Strategies
├── Research
├── Culture
└── Careers

Contact
└── Contact

Access
├── Request Access
└── Investor Access

Legal
├── Legal
├── Privacy
├── Terms
└── Disclosures
```

A composição visual final será definida durante a Sprint de UI.

---

# 07 - Breadcrumbs

Breadcrumbs não são necessários para páginas de primeiro nível.

Aplicar principalmente às páginas filhas de Strategies:

```text
Strategies / Macro
Strategies / Relative Value
Strategies / Credit
Strategies / Global
```

A representação visual deve utilizar o idioma da interface.

---

# 08 - Indexation

## Indexable

```text
/
 /about
 /approach
 /strategies
 /strategies/macro
 /strategies/relative-value
 /strategies/credit
 /strategies/global
 /research
 /culture
 /careers
 /contact
 /legal
 /privacy
 /terms
 /disclosures
 /investor-access
 ```

 ## Noindex

 ```text
 /request-access
 ```

 O futuro portal autenticado também deverá ser não indexável.

 ---

 # 09 - Public / Private Boundary

 ```text
 PUBLIC WEBSITE
│
├── Brand
├── About
├── Approach
├── Strategies
├── Research
├── Culture
├── Careers
├── Contact
├── Legal
├── Privacy
├── Terms
└── Disclosures
        │
        ↓
REQUEST ACCESS
        │
        ↓
INSTITUTIONAL RELATIONSHIP
        │
        ↓
INVESTOR ACCESS
        │
        ↓
AUTHENTICATED INVESTOR PORTAL
```

O site público não deve expor informações específicas de investidores ou recursos que dependam de autenticação.

---

# 10 - Progressive Disclosure

A arquitetura segue:

```text
Brand
↓
Thesis
↓
Capability
↓
Process
↓
Proof
↓
Strategies
↓
Research
↓
Access
↓
Relationship
```

A homepage não deve conter todas as informações institucionais.

Ela deve conduzir o visitante progressivamente às páginas especializadas.

---

# 11 - Legacy Route

A implementação atual contém:

```text
/opportunity/access
```

A arquitetura futura utiliza:

```text
/request-access
```

Durante a migração, a rota antiga deverá ser preservada temporariamente e redirecionada para a nova rota.

Não remover a rota antiga antes de implementar e validar a nova.

---

# 12 - Navigation Implementation Rule

A navegação da aplicação só deve apontar para uma nova rota depois que essa rota existir e tiver sido validada.

Não substituir os anchors atuais por URLs inexistentes durante esta Sprint.

A alteração de `Navigation.tsx` pertence à Sprint de implementação das rotas.

---

# 13 - Architecture Principles

## Principle 1 - Institution before product

A experiência apresenta primeiro:

```text
Who we are
How we think
What we do
```

antes de aprofundar produtos ou estratégias.

## Principle 2 - Capability before claim

A arquitetura deve permitir demonstrar capacidade antes de apresentar afirmações institucionais.

## Principle 3 - Process before promise

A forma de pensar e administrar risco deve preceder qualquer comunicação sobre estratégias.

## Principle 4 - Public information before restricted information

Informação institucional pública permanece separada de informação específica de investidores.

## Principle 5 - Progressive disclosure

Cada página deve aprofundar uma pergunta específica sem duplicar integralmente o conteúdo de outras páginas.

---

# 14 - Future App Router Structure

A arquitetura deverá convergir para:

```text
src/app/
├── page.tsx
├── about/page.tsx
├── approach/page.tsx
├── strategies/page.tsx
├── strategies/macro/page.tsx
├── strategies/relative-value/page.tsx
├── strategies/credit/page.tsx
├── strategies/global/page.tsx
├── research/page.tsx
├── culture/page.tsx
├── careers/page.tsx
├── contact/page.tsx
├── request-access/page.tsx
├── investor-access/page.tsx
├── legal/page.tsx
├── privacy/page.tsx
├── terms/page.tsx
└── disclosures/page.tsx
```

Essa estrutura representa o estado arquitetural desejado e não exige que todas as páginas sejam implementadas nesta Sprint.

---

# 15 - Source of Truth

Este documento deve ser consultado antes da implementação de novas rotas.

Caso uma Sprint futura proponha uma rota, página ou relacionamento que não esteja contemplado aqui, a decisão deve ser registrada antes da implementação.

---

# 16 - Sprint 02 Acceptance Criteria

A Sprint está concluída quando:

- todas as páginas institucionais estiverem identificadas;
- todas as URLs estiverem definidas;
- a hierarquia estiver definida;
- Strategies possuir sua hierarquia de segundo nível;
- a navegação principal estiver definida;
- o CTA institucional estiver definido;
- footer/infrastructure estiverem separados da navegação principal;
- breadcrumbs estiverem definidos;
- páginas não indexáveis estiverem definidas;
- public/private boundaries estiverem definidos;
- progressive disclosure estiverem definido;
- a rota legada `/opportunity/access` estiver documentada;
- a futura estrutura do App Router estiver clara;
- nenhuma decisão estratégica relevante permanecer implícita.

---

# 17 - Definition of Done

Qualquer desenvolvedor deve conseguir olhar para este documento e responder:

1. Qual página preciso criar?
2. Qual URL ela possui?
3. Ela é pública?
4. Ela é indexável?
5. Ela pertence à navegação?
6. Ela pertence ao footer?
7. Ela possui página filha?
8. Ela precisa de breadcrumb?
9. De qual página o usuário chega nela?
10. Para qual página ela conduz?
11. Qual é a responsabilidade daquela página?

Se alguma dessas respostas depender de interpretação individual, a Information Architecture ainda não está concluída.