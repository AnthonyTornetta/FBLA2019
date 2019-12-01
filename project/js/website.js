const onloads = [];

var website =
{
    addOnLoad: (func) =>
    {
        onloads.push(func);
    }
};

document.addEventListener('domcontentloaded', () =>
{
    onloads.forEach(f => f());
});