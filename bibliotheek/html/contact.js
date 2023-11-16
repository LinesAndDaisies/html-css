function setRating(rating) {
    document.getElementById('sterren').value = rating;

    const sterren = document.querySelectorAll('.sterren-rating .ster'); // alle elementen met .sterren-rating en .ster word geselecteerd. Hier kunnen ze op de sterren klikken om een waardering te geven.

    sterren.forEach((ster, index) => { // foreach-lus zodat elk geselecteerd ster-element word herhaalt, index is de bijbehoordende lijst van de geselecteerde sterren.
        if (index < rating) { // if en else word gebruikt voor wanneer de ster geselecteerd is goud word en anders donkergroen is
            ster.style.color = 'gold'; 
        } else {
            ster.style.color = 'darkgreen'; 
        }
    });
}
