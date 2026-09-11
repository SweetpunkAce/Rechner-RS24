from .pricing import calculate_base_price
from .mutations import calculate_mutation_price
from .validation import validate_input

def calculate_price(
        category,
        level,
        mutations=None,
        shiny=False,
        castrated=False,
):

    """
    Zentrale Schnittstelle für die Preisberechnung
    
    Die eigentliche Berechnung wird von den einzelnen Modulen übernommen
    """

    if mutations is None:
        mutations = {}

    validate_input(
        category=category,
        level=level,
        mutations=mutations,
    )

    base_price = calculate_base_price(
        category=category,
        level=level,
    )

    mutation_price = calculate_mutation_price(
        mutations=mutations,
    )

    shiny_price = 0

    if shiny:
        # wird später durch die Shiny Regel ersetzt
        shiny_price = 0

    total_price = base_price + mutation_price + shiny_price