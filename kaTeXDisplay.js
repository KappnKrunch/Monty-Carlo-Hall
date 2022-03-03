function renderKaTeX()
{
  renderKnown();
  renderUnknown();
  renderBayesIdenties();
  renderBayesValues();
  renderBayesConclusion();
}

function renderKnown()
{
  let Hn = "P(H_n) = \\frac{1}{3};\\space ";
  let D = "P(D) = \\frac{1}{2};";
  let DH1 = "P(D|H_1) = \\frac{1}{2};\\space ";
  let DH2 = "P(D|H_2) = 1;\\space ";
  let DH3 = "P(D|H_3) = 0;";
  
  let knownEq1 = Hn+D;
  let knownEq2 = DH1+DH2+DH3;
  
  katex.render(knownEq1, document.getElementById("knowns1"), {
    throwOnError: false
  });
  
    katex.render(knownEq2, document.getElementById("knowns2"), {
    throwOnError: false
  });
}

function renderUnknown()
{
  let unknown = "P(H_n|D) = ?";
  
  katex.render(unknown, document.getElementById("unknowns"), {
    throwOnError: false
  });
}

function renderBayesIdenties()
{
  let ids = "\\small P(A \\land B) = P(A|B)P(B) = P(B|A)P(A)\\newline ";
  let idvs1 = "P(D \\land H_n) = P(D|H_n)P(H_n) = P(H_n|D)P(D)\\newline ";
  let idvs2 = "\\normalsize  P(H_n|D) = \\frac{P(D|H_n)P(H_n)}{P(D)} \\newline ";
  
  let eq = ids + idvs1 + idvs2;
  
  katex.render(eq, document.getElementById("bayes-identities"), {
    throwOnError: false
  });
}

function renderBayesValues()
{
  
  let h1 = "\\frac{P(D|H_1)P(H_1)}{P(D)} = \\frac{\\frac{1}{2} * \\frac{1}{3}}{\\frac{1}{2}}  = \\frac{1}{3} \\newline \\newline ";
  let h2 = "\\frac{P(D|H_2)P(H_2)}{P(D)} = \\frac{1 * \\frac{1}{3}}{\\frac{1}{2}}  = \\frac{2}{3} \\newline ";
  let h3 = "\\frac{P(D|H_3)P(H_3)}{P(D)}  = \\frac{0 * \\frac{1}{3}}{\\frac{1}{2}}  = 0";
  
  let eq = h1 + h2 + h3;
  
  katex.render(eq, document.getElementById("bayes-values"), {
    throwOnError: false
  });
}

function renderBayesConclusion()
{
  let p1 = "P(H_1|D) = \\frac{1}{3};\\space ";
  let p2 = "P(H_2|D) = \\frac{2}{3};\\space ";
  let p3 = "P(H_3|D) = 0;";
  
  let eq = p1+p2+p3;
  
  katex.render(eq, document.getElementById("bayes-conclusion"), {
    throwOnError: false
  });
}

window.onload = renderKaTeX;
