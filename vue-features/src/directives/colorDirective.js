let defColor = 'black';
let accentColor = 'red';

const onMousover = (e) => {
  e.target.style.color = accentColor;
};
const onMousout = (e) => {
  e.target.style.color = defColor;
};

export default {
  mounted(el, binding) {
    el.style[binding.arg] = binding.value;
    if (binding.modifiers.hover) {
      el.addEventListener('mouseover', onMousover);
      el.addEventListener('mouseout', onMousout);
    }
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value;
    defColor = binding.value;
    if (binding.modifiers.hover) {
      el.addEventListener('mouseover', onMousover);
      el.addEventListener('mouseout', onMousout);
    }
  },
  unmounted(el, binding) {
    defColor = 'black';
    if (binding.modifiers.hover) {
      el.removeEventListener('mouseover', onMousover);
      el.removeEventListener('mouseout', onMousout);
    }
  },
};
