def berechne_mutationswert(mutationen):
    """
    Berechnet den Gesamtwert aller ausgewählten Mutationen.

    Der Mutationswert wird ausschließlich für die spätere
    Preisempfehlung verwendet und nicht zum Gesamtpreis addiert.
    """

    mutationswert = 0

    for mutation in mutationen:
        anzahl = mutation["anzahl"]
        sonderpreis = mutation["sonderpreis"]

        mutationswert += anzahl * sonderpreis

    return mutationswert