website.addOnLoad(() =>
{
    document.getElementById('menu').onclick = (e) =>
    {
        document.getElementById('links').classList.toggle('active');
    };
});