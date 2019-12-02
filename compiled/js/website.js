const onloads = [];

var website =
{
    addOnLoad: (func) =>
    {
        onloads.push(func);
    }
};

window.addEventListener('load', () =>
{
    console.log(onloads);
    onloads.forEach(f => f());
});