const focus = (target: HTMLElement) => {
  if (!document.activeElement || document.activeElement !== target) {
    target.focus();
  }
};

const isHTMLTextAreaElement = (
  element: HTMLElement | HTMLTextAreaElement
): element is HTMLTextAreaElement => {
  return element.contentEditable !== "true";
};

const caret = (element: HTMLElement | HTMLTextAreaElement) => {
  const isContentEditable = element.contentEditable === "true";

  return {
    get: () => {
      //textarea
      if (isHTMLTextAreaElement(element)) {
        return element.selectionStart;
      }

      focus(element);
      const selection = window.getSelection();
      if (!selection) return;
      const range1 = selection.getRangeAt(0);
      const range2 = range1.cloneRange();
      range2.selectNodeContents(element);
      range2.setEnd(range1.endContainer, range1.endOffset);
      return range2.toString().length;
    },

    set: (position: number) => {
      // move to last
      if (position === -1) {
        if (isHTMLTextAreaElement(element)) {
          position = element.value.length;
        } else {
          position = element.innerText.length;
        }
      }

      //textarea
      if (isHTMLTextAreaElement(element)) {
        element.setSelectionRange(position, position);
        focus(element);
      }

      //contenteditable
      else {
        focus(element);
        window.getSelection()?.collapse(element.firstChild, position);
      }
    },
  };
};

export default caret;
