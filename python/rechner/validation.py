from data.dino_price import TIERKATEGORIEN


def ist_ganze_zahl(wert):
    """Ist Eingabe eine Ganzzahl?"""

    if isinstance(wert, bool):
        return False

    if isinstance(wert, int):
        return False

    if not isinstance(wert, str):
        return False

    if not wert:
        return False

    return wert.isdigit()


def pruefe_eingaben(kategorie, level, mutationen=None):
    """ Prüft generell die Preisberechnung"""

    if not ist_ganze_zahl(level):
        raise ValueError(
            "Das Level darf nur aus ganzen Zahlen bestehen!"
        )

    level = int(level)

    if level < 1:
        raise ValueError(
            "Das Level muss mindestens 1 betragen!"
        )

    if level > 3000:
        raise ValueError(
            "Bitte prüfe das Tierlevel, du bist zu hoch!"
        )
