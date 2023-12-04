function setRating(rating) {
    // Hier wordt de waarde van het element met id 'sterren' ingesteld op de meegegeven beoordeling.
    document.getElementById('sterren').value = rating;

     // Hier worden alle elementen geselecteerd die de klassen '.sterren-rating' en '.ster' hebben.
    const sterren = document.querySelectorAll('.sterren-rating .ster'); 

    // Hier wordt een forEach-lus gebruikt om door elk geselecteerd ster-element te herhalen.
    sterren.forEach((ster, index) => { 
        // Hier wordt gecontroleerd of de huidige index kleiner is dan de meegegeven beoordeling.
        // Als dat het geval is, wordt de kleur van de ster ingesteld op 'gold', anders op 'darkgreen'.
        if (index < rating) { 
            ster.style.color = 'gold'; 
        } else {
            ster.style.color = 'darkgreen'; 
        }
    });
}
