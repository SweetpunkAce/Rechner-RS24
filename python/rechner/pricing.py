from data.dino_price import TIERKATEGORIEN
from data.item_price import ITEMKATEGORIEN


KASTRATIONSREDUKTION = 0.75


def ermittle_stufe(kategorie, level, mutiert=False):
    """
    Ermittelt die Preisstufe eines Dinos anhand des Levels
    und des Mutationsstatus.
    """

    if mutiert or level >= 451:
        return "Stufe 3"

    if level >= 225:
        return "Stufe 2"

    return "Stufe 1"


def berechne_basispreis(kategorie, level, mutiert=False):
    """
    Berechnet den Basispreis eines Dinos.

    Die Levelsteigerung wird hier bewusst nicht berücksichtigt.
    Sie wird ausschließlich für die Preisempfehlung verwendet.
    """

    stufe = ermittle_stufe(
        kategorie=kategorie,
        level=level,
        mutiert=mutiert,
    )

    return TIERKATEGORIEN[kategorie]["preise"][stufe]


def berechne_preisempfehlung(kategorie, level, mutationswert=0):
    """
    Berechnet die Preisempfehlung anhand des Levels
    und des Mutationswertes.

    Die Preisempfehlung beginnt bei Level 225
    und verwendet die festgelegte Levelsteigerung
    der jeweiligen Tierkategorie.
    """

    daten = TIERKATEGORIEN[kategorie]

    stufe_2_preis = daten["preise"]["Stufe 2"]
    levelsteigerung = daten["Levelsteigerung"]

    level = int(level)

    if level < 225:
        preisempfehlung = stufe_2_preis
    else:
        preisempfehlung = (
            stufe_2_preis
            + (level - 225) * levelsteigerung
        )

    preisempfehlung += mutationswert

    return round(preisempfehlung)


def berechne_kastrationspreis(
        kategorie,
        preis,
        kastriert=False,
):
    """
    Berechnet den Preis unter Berücksichtigung der Kastration.

    Bei einer Kastration werden 75 % des ursprünglichen Preises
    abgezogen. Es verbleiben 25 % des ursprünglichen Preises.

    Beim Element-Gacha wird die Kastration ignoriert.
    """

    if not kastriert:
        return preis

    if kategorie == "element_gacha":
        return preis

    return round(
        preis - (preis * KASTRATIONSREDUKTION)
    )


def berechne_essenz(kategorie):
    """
    Gibt den festen Wert der Essenz
    der jeweiligen Tierkategorie zurück.

    Eine Essenz ist ein eigenständiges Item und wird
    unabhängig von der Dino-Preisberechnung behandelt.
    """

    return TIERKATEGORIEN[kategorie]["essenz"]


def berechne_itempreis(anzahl, einzelpreis):
    """
    Berechnet den Gesamtpreis einer Item-Auswahl
    anhand der Anzahl und des festgelegten Einzelpreises.
    """

    return anzahl * einzelpreis