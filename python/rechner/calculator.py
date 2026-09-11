from .pricing import (
    berechne_basispreis,
    berechne_preisempfehlung,
    berechne_kastrationspreis,
    berechne_essenz,
)
from .mutations import berechne_mutationswert
from .validation import pruefe_level


SHINY_AUFPREIS = 30000


def berechne_preis(
        kategorie,
        level,
        mutationen=None,
        shiny=False,
        kastriert=False,
):
    """
    Zentrale Schnittstelle für die Dino-Preisberechnung.

    Gesamtpreis und Preisempfehlung werden getrennt berechnet.
    Kastration und Shiny werden separat berücksichtigt.
    """

    if mutationen is None:
        mutationen = []

    pruefe_level(level)

    level = int(level)

    mutationswert = berechne_mutationswert(
        mutationen=mutationen,
    )

    basispreis = berechne_basispreis(
        kategorie=kategorie,
        level=level,
    )

    preisempfehlung = berechne_preisempfehlung(
        kategorie=kategorie,
        level=level,
        mutationswert=mutationswert,
    )

    basispreis = berechne_kastrationspreis(
        kategorie=kategorie,
        preis=basispreis,
        kastriert=kastriert,
    )

    preisempfehlung = berechne_kastrationspreis(
        kategorie=kategorie,
        preis=preisempfehlung,
        kastriert=kastriert,
    )

    if shiny:
        basispreis += SHINY_AUFPREIS
        preisempfehlung += SHINY_AUFPREIS

    return {
        "gesamtpreis": basispreis,
        "preisempfehlung": preisempfehlung,
    }


def berechne_essenzpreis(kategorie, anzahl=1):
    """
    Berechnet den Gesamtpreis von Essenzen
    anhand der Tierkategorie und Anzahl.

    Essenzen sind eigenständige Items und werden
    unabhängig von Level, Mutationen, Shiny
    und Kastration berechnet.
    """

    essenzpreis = berechne_essenz(
        kategorie=kategorie,
    )

    return essenzpreis * anzahl