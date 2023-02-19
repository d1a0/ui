export default function clipboard(node: HTMLElement, text: string) {

  function click() {
    navigator.clipboard.writeText(text);
  }

  node.addEventListener("click", click);
  return {
    update(newArgs: string) {
      text = newArgs;
    },
    destroy() {
      node.removeEventListener("click", click);
    }
  }
}