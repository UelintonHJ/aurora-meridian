# Aurora Meridian - Motion System

## Status

Approved for experience and interaction behavior.

## Purpose

Este documento define como a experiência da Aurora Meridian deve se comportar antes da implementação de animações.

Motion existe para:

- orientação;
- feedback;
- continuidade;
- hierarquia;
- narrativa;

Motion não deve existir apenas para adicionar sofisticação visual.

## North Star

> Qual informação esse movimento ajuda o usuário a perceber?

Se a resposta for nenhuma, então o movimento não deve existir.

---

# 01 - Motion Principles

## 01. Purpose before animation

Toda interação deve possuir uma função perceptível.

## 02. Restraint

O movimento deve ser proporcional à importância do elemento.

## 03. Continuity

Transições devem parecer consequência natural do estado anterior.

## 04. Hierarchy

Elementos estruturais podem utilizar movimentos mais lentos.

Elementos de interface devem responder rapidamente.

## 05. Accessibility

Movimento não pode ser requisito para compreender ou utilizar a interface.

## 06. Responsive motion

Motion deve ser recomposto para cada viewport.

---

# 02 - Motion Levels

## Instant

### Duration

120-180ms

### Use

- hover;
- focus;
- active;
- menu controls;
- color;
- border;
- pequenos estados.

### Easing

`standard`

---

## Medium

### Duration

350-500ms

### Use

- reveal;
- entrance;
- navigation state;
- CTA transition;
- accordion;
- contextual transitions.

### Easing

`standard` ou `emphasized`, conforme o conteúdo.

---

## Slow

### Duration

700-1000ms

### Use

- hero composition;
- editorial imagery;
- narrative transitions;
- structural visual movement.

### Easing

`emphasized`

---

# 03 - Reveal

O padrão principal é:

```text
opacity: 0 
transform: translateY(...) 
    ↓ 
opacity: 1 
transform: translateY(0)
```

Reveal deve ser discreto.

Valores de referência:

| Elemento | Distância |
| -------- | --------: |
| Heading  |   20–24px |
| Body     |   12–16px |
| Metadata |    8–12px |
| Image    |   16–24px |

O objetivo é revelar conteúdo, não demonstrar animação.

---

# 04 - Hover

Hover deve comunicar interatividade.

Preferir: 

- color;
- border;
- opacity;
- background;
- translateY de baixa amplitude.

Evitar:

- grandes escalas;
- grandes deslocamentos;
- sombras exageradas;
- movimento contínuo.

---

# 05 - Focus

Focus deve priorizar:

- visibilidade;
- contraste;
- localização;
- acessibilidade.

Focus não deve depender de movimento.

O estado `:focus-visible` é obrigatório para controles interativos.

---

# 06 - Navigation

## Desktop

Estados:

```text
Default 
Hover 
Focus 
Active
```

Hover deve possuir resposta visual instantânea.

Focus deve utilizar indicador claramente visível.

## Mobile

O menu possui:

```text
Closed
Open
```

A transição deve ser curta e contextual.

Escape deve fechar o menu.

O foco deve retornar ao controle que abriu o menu.

---

# 07 - CTA

Estados:

```text
Default
Hover
Focus
Pressed
```

Hover deve reforçar a affordance.

Focus deve permanecer claramente identificável.

Pressed deve possuir resposta mínima.

CTA não deve saltar ou deslocar-se significativamente.

---

# 08 - Image Movement

Imagens podem utilizar:

- reveal;
- pequena escala;
- pequena translação;

Não utilizar:

- parallax agressivo;
- zoom contínuo;
- movimento decorativo constante.

A imagem deve contribuir para a narrativa.

---

# 09 - Scroll Progression

Scroll deve reforçar a estrutura narrativa:

```text
Hero 
    ↓ 
The Firm 
    ↓ 
Approach 
    ↓ 
Capabilities 
    ↓ 
Intelligence 
    ↓ 
Culture 
    ↓ 
Access
```

Scroll progression não deve controlar excessivamente a viewport.

Evitar:

- scroll hijacking;
- parallax agressivo;
- animações simultâneas;
- movimento constante.

---

# 10 - Page Transitions

Não existe uma page transition global obrigatória nesta etapa.

A navegação entre páginas deve utilizar a navegação nativa do App Router.

Uma transição editorial global poderá ser avaliada quando a arquitetura institucional definitiva estiver implementada.

---

# 11 - Reduced Motion

Quando:

```text
prefers-reduced-motion: reduce
```

estiver ativo:

- remover movimento espacial não essencial;
- reduzir duração;
- preservar feedback visual;
- substituir transformações por opacity quando apropriado;
- desativar loops decorativos.

Exemplo:

```text
opacity + translate 
    ↓ 
opacity
```

Motion não deve desaparecer quando sua função for necessária para compreensão, mas deve ser reduzido ao mínimo necessário.

---

# 12 - Responsive Motion

## Desktop

- maior amplitude;
- maior presença narrativa;
- imagens podem possuir movimento sutil.

## Tablet

- menor amplitude;
- menor simultaneidade;
- movimento visual reduzido.

## Mobile

- amplitude mínima;
- menor quantidade de elementos animados simultaneamente;
- imagens preferencialmente estáticas;
- preservação da velocidade percebida.

---

# 13 - Motion Matrix

| Elemento            | Trigger   | Behavior              | Duration | Easing     | Purpose              | Reduced Motion |
| ------------------- | --------- | --------------------- | -------: | ---------- | -------------------- | -------------- |
| Hero                | page load | opacity + Y           |     Slow | emphasized | introduzir narrativa | opacity        |
| Heading             | viewport  | opacity + Y           |   Medium | emphasized | hierarquia           | opacity        |
| Body                | viewport  | opacity + Y           |   Medium | standard   | continuidade         | opacity        |
| Image               | viewport  | opacity + small scale |     Slow | emphasized | revelar mídia        | opacity        |
| CTA                 | hover     | color + subtle Y      |  Instant | standard   | feedback             | color          |
| CTA                 | focus     | outline               |  Instant | standard   | localização          | same           |
| Navigation          | hover     | color                 |  Instant | standard   | feedback             | same           |
| Navigation          | focus     | outline               |  Instant | standard   | localização          | same           |
| Mobile menu         | click     | contextual transition |   Medium | standard   | mudança de contexto  | instant        |
| Accordion           | click     | open/close            |   Medium | standard   | feedback de estado   | instant        |
| Section progression | scroll    | subtle emphasis       |     Slow | standard   | ritmo narrativo      | none           |

---

# 14 - Implementation Rule

Antes de implementar qualquer animação, responder:

```text
Trigger 
    ↓ 
Behavior 
    ↓ 
Duration 
    ↓ 
Easing 
    ↓ 
Purpose 
    ↓ 
Reduced-motion behavior
```

Se qualquer item estiver indefinido, a animação não deve ser implementada.

---

# 15 - Quality Bar

A experiência deve transmitir:

```text
Calma
+
Precisão
+
Continuidade
+
Hierarquia
+
Controle
```

Nunca:

```text
Espetáculo
+
Excesso
+
Urgência
+
Distração
```

---

# 16 - Definition of Done

A Sprint está concluída quando:

- Motion Levels estão definidos;
- Reveal está definido;
- Hover está definido;
- Focus está definido;
- Navigation está definido;
- CTA está definido;
- Image Movement está definido;
- Scroll Progression está definida;
- Page Transition está definida;
- Reduced Motion está definida;
- Responsive Motion está definida;
- Motion Matrix está documentada;
- cada interação possui propósito;
- nenhuma nova biblioteca de motion foi introduzida sem necessidade;
- os tokens possuem nomenclatura semântica;
- os comportamentos existentes podem ser avaliados contra este documento.

---

# North Star

> Institutional confidence through demonstrated competence.

Motion deve reforçar essa percepção, nunca substituí-la.