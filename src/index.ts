const input = document.getElementById('submit') as HTMLInputElement | null;

// ✅ Set disabled attribute
input?.setAttribute('disabled', '');

// ✅ Remove the disabled attribute
// input?.removeAttribute('disabled')

// -----------------------------------------------------------------

const btn = document.getElementById('btn') as HTMLButtonElement | null;

// ✅ Set disabled attribute
btn?.setAttribute('disabled', '');

// ✅ Remove the disabled attribute
// btn?.removeAttribute('disabled');