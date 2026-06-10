export default function decorate(block) {
  const [quoteRow, authorRow] = [...block.children];

  const blockquote = document.createElement('blockquote');
  blockquote.append(...quoteRow.firstElementChild.childNodes);

  const cite = document.createElement('cite');
  if (authorRow) cite.append(...authorRow.firstElementChild.childNodes);

  block.replaceChildren(blockquote, cite);
}