// ========================================
// GENE-DATENBANK
// ========================================

export const geneDaten = [

    // ========================================
    // BREEDING
    // ========================================

    {
        name: "Mutable [Stat]",
        name_de: "Mutierbar [Stat]",
        kategorie: "breeding",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "1-2% increase to mut chance, higher chance for [Stat]",
        beschreibung_de: "1–2 % höhere Mutationschance, höhere Chance auf [Stat]."
    },
    {
        name: "[Stat] Robust",
        name_de: "[Stat] Robust",
        kategorie: "breeding",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "1.5-3% increase to inherit higher [Stat] of parents",
        beschreibung_de: "1,5–3 % höhere Chance, den höheren [Stat] der Eltern zu erben."
    },
    {
        name: "[Stat] Frail",
        name_de: "[Stat] Gebrechlich",
        kategorie: "breeding",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "1.5-3% decrease to inherit higher [Stat] of parents",
        beschreibung_de: "1,5–3 % geringere Chance, den höheren [Stat] der Eltern zu erben."
    },


    // ========================================
    // COMBAT
    // ========================================

    {
        name: "Numb",
        name_de: "Unempfindlich",
        kategorie: "combat",
        max_stacks: 1,
        stufe: null,
        beschreibung_en: "Damage taken reduced by 25-50%, takes that damage over 5s",
        beschreibung_de: "Erlittener Schaden wird um 25–50 % reduziert und über 5 Sekunden verteilt."
    },
    {
        name: "Vampiric",
        name_de: "Vampirisch",
        kategorie: "combat",
        max_stacks: 1,
        stufe: null,
        beschreibung_en: "5-10% Lifesteal",
        beschreibung_de: "5–10 % Lebensraub."
    },
    {
        name: "Tenacious",
        name_de: "Zäh",
        kategorie: "combat",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "Damage taken reduced by 12.5-25% as health reaches 25%",
        beschreibung_de: "Erlittener Schaden wird um 12,5–25 % reduziert, wenn die Gesundheit 25 % erreicht."
    },
    {
        name: "Angry",
        name_de: "Wütend",
        kategorie: "combat",
        max_stacks: 2,
        stufe: null,
        beschreibung_en: "Damage dealt increases by 12.5-25% as health reaches 25%",
        beschreibung_de: "Verursachter Schaden steigt um 12,5–25 %, wenn die Gesundheit 25 % erreicht."
    },
    {
        name: "Warm",
        name_de: "Warm",
        kategorie: "combat",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "40-80 Insul, 5-10% reduced Cold damage",
        beschreibung_de: "40–80 Isolation, 5–10 % weniger Kälteschaden."
    },
    {
        name: "Cold",
        name_de: "Kalt",
        kategorie: "combat",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "40-80 Insul, 5-10% reduced Heat damage",
        beschreibung_de: "40–80 Isolation, 5–10 % weniger Hitzeschaden."
    },
    {
        name: "High Endurance",
        name_de: "Hohe Ausdauer",
        kategorie: "combat",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "4-8% reduced stamina drain from sprinting",
        beschreibung_de: "4–8 % weniger Ausdauerverbrauch beim Sprinten."
    },
    {
        name: "Protective",
        name_de: "Beschützend",
        kategorie: "combat",
        max_stacks: 2,
        stufe: null,
        beschreibung_en: "Rider takes 15-30% less damage. Persists 10s after dismount",
        beschreibung_de: "Der Reiter erleidet 15–30 % weniger Schaden. Der Effekt bleibt 10 Sekunden nach dem Absteigen bestehen."
    },
    {
        name: "Excitable",
        name_de: "Erregbar",
        kategorie: "combat",
        max_stacks: 1,
        stufe: null,
        beschreibung_en: "Basic Attacks reduce Ability cooldowns by 0.25-0.5s",
        beschreibung_de: "Standardangriffe reduzieren die Abklingzeiten von Fähigkeiten um 0,25–0,5 Sekunden."
    },
    {
        name: "Distracting",
        name_de: "Ablenkend",
        kategorie: "combat",
        max_stacks: 1,
        stufe: null,
        beschreibung_en: "Enemys that take damage from this Creature deal 5-10% less damage to all other targets for 20s",
        beschreibung_de: "Gegner, die von diesem Tier Schaden erleiden, verursachen 20 Sekunden lang 5–10 % weniger Schaden an allen anderen Zielen."
    },
    {
        name: "Heavy Hitting",
        name_de: "Schlagkräftig",
        kategorie: "combat",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "Basic Attack damage increased 2.5-5%, Attack Spd reduced 5-10%",
        beschreibung_de: "Schaden von Standardangriffen um 2,5–5 % erhöht, Angriffsgeschwindigkeit um 5–10 % reduziert."
    },
    {
        name: "Quick Hitting",
        name_de: "Schnellschlag",
        kategorie: "combat",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "Attack Spd increased 2.5-5%, Basic Attack damage reduced 5-10%",
        beschreibung_de: "Angriffsgeschwindigkeit um 2,5–5 % erhöht, Schaden von Standardangriffen um 5–10 % reduziert."
    },
    {
        name: "Giantslaying",
        name_de: "Riesentöter",
        kategorie: "combat",
        max_stacks: 2,
        stufe: null,
        beschreibung_en: "2.5-5% increased damage to 500< drag weight, 7.5-15% descreased damage to 200> drag weight",
        beschreibung_de: "2,5–5 % mehr Schaden gegen Kreaturen mit einem Traggewicht über 500, 7,5–15 % weniger Schaden gegen Kreaturen mit einem Traggewicht unter 200."
    },
    {
        name: "Kingslaying",
        name_de: "Königstöter",
        kategorie: "combat",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "5-10% increased damage to Bosses, reduces damage to all other creatures by 10%",
        beschreibung_de: "5–10 % mehr Schaden gegen Bosse, dafür 10 % weniger Schaden gegen alle anderen Kreaturen."
    },
    {
        name: "Fatty",
        name_de: "Fett",
        kategorie: "combat",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "Gains 0.1-0.2 Armor per point in Food",
        beschreibung_de: "Erhält 0,1–0,2 Rüstung pro Punkt Nahrung."
    },


    // ========================================
    // UTILITY
    // ========================================

    {
        name: "Cave Bearing",
        name_de: "Höhlenaffinität",
        kategorie: "utility",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "15-30% reduction in Resources from area - Gems, Ele Ore",
        beschreibung_de: "15–30 % weniger Ressourcen aus diesem Gebiet – Edelsteine und Elementerz."
    },
    {
        name: "Desert Bearing",
        name_de: "Wüstenaffinität",
        kategorie: "utility",
        max_stacks: null,
        stufe: null,
        beschreibung_en: "15-30% reduction in Resources from area - Salt, Sand",
        beschreibung_de: "15–30 % weniger Ressourcen aus diesem Gebiet – Salz und Sand."
    },
    {
        name: "Mineral Bearing",
        name_de: "Mineralienaffinität",
        kategorie: "utility",
        max_stacks: null,
        stufe: null,
        beschreibung_en: "15-30% reduction in Resources from area - Metal, Crystal, Stone",
        beschreibung_de: "15–30 % weniger Ressourcen aus diesem Gebiet – Metall, Kristall und Stein."
    },
    {
        name: "Carcass Bearing",
        name_de: "Kadaveraffinität",
        kategorie: "utility",
        max_stacks: null,
        stufe: null,
        beschreibung_en: "15-30% reduction in Resources from area - Hide, Org Poly, Chitin",
        beschreibung_de: "15–30 % weniger Ressourcen aus diesem Gebiet – Fell, organisches Polymer und Chitin."
    },
    {
        name: "Exotic Bearing",
        name_de: "Exotenaffinität",
        kategorie: "utility",
        max_stacks: null,
        stufe: null,
        beschreibung_en: "15-30% reduction in Resources from area - Black Pearls",
        beschreibung_de: "15–30 % weniger Ressourcen aus diesem Gebiet – Schwarze Perlen."
    },
    {
        name: "Plant Bearing",
        name_de: "Pflanzenaffinität",
        kategorie: "utility",
        max_stacks: null,
        stufe: null,
        beschreibung_en: "15-30% reduction in Resources from area - Wood, Berries",
        beschreibung_de: "15–30 % weniger Ressourcen aus diesem Gebiet – Holz und Beeren."
    },
    {
        name: "Meat Bearing",
        name_de: "Fleischaffinität",
        kategorie: "utility",
        max_stacks: null,
        stufe: null,
        beschreibung_en: "15-30% reduction in Resources from area - Meats",
        beschreibung_de: "15–30 % weniger Ressourcen aus diesem Gebiet – Fleisch."
    },
    {
        name: "Slow Metabolism",
        name_de: "Langsamer Stoffwechsel",
        kategorie: "utility",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "Reduces Food consumption by 5-10%, includes abilities that drain food",
        beschreibung_de: "Reduziert den Nahrungsverbrauch um 5–10 %, einschließlich Fähigkeiten, die Nahrung verbrauchen."
    },
    {
        name: "Aquatic",
        name_de: "Aquatisch",
        kategorie: "utility",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "Swim speed increase 7.5-15%, O2 drain reduced 12.5-25%, swim-sprint stamina drain reduced 4-8%",
        beschreibung_de: "Schwimmgeschwindigkeit um 7,5–15 % erhöht, Sauerstoffverbrauch um 12,5–25 % reduziert und Ausdauerverbrauch beim Schwimmsprint um 4–8 % reduziert."
    },
    {
        name: "Athletic",
        name_de: "Athletisch",
        kategorie: "utility",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "Gain 0.05-0.1 health regen and 0.05-0.1% stamina regen per point in O2",
        beschreibung_de: "Erhält 0,05–0,1 Gesundheitsregeneration und 0,05–0,1 % Ausdauerregeneration pro Punkt Sauerstoff."
    },
    {
        name: "Carefree",
        name_de: "Sorglos",
        kategorie: "utility",
        max_stacks: 1,
        stufe: null,
        beschreibung_en: "Gain 7.5-15% movespeed buff that is lost for 20s after dealing/taking damage or gaining new rider",
        beschreibung_de: "Erhält einen Bewegungsgeschwindigkeitsbonus von 7,5–15 %, der für 20 Sekunden verloren geht, nachdem Schaden verursacht oder erlitten wurde oder ein neuer Reiter aufsteigt."
    },
    {
        name: "Aggressive",
        name_de: "Aggressiv",
        kategorie: "utility",
        max_stacks: 2,
        stufe: null,
        beschreibung_en: "When creature hits enemy, gain 2.5-5% movespeed buff for 5s",
        beschreibung_de: "Wenn das Tier einen Gegner trifft, erhält es 5 Sekunden lang einen Bewegungsgeschwindigkeitsbonus von 2,5–5 %."
    },
    {
        name: "Cowardly",
        name_de: "Feige",
        kategorie: "utility",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "When creature takes damage, gains 2.5-5% movespeed buff for 5s",
        beschreibung_de: "Wenn das Tier Schaden erleidet, erhält es 5 Sekunden lang einen Bewegungsgeschwindigkeitsbonus von 2,5–5 %."
    },


    // ========================================
    // MISC
    // ========================================

    {
        name: "Nocturnal",
        name_de: "Nachtaktiv",
        kategorie: "misc",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "2.5-5% Reduced stamina drain at night",
        beschreibung_de: "2,5–5 % weniger Ausdauerverbrauch während der Nacht."
    },
    {
        name: "Diurnal",
        name_de: "Tagaktiv",
        kategorie: "misc",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "2.5-5% Reduced stamina drain during day",
        beschreibung_de: "2,5–5 % weniger Ausdauerverbrauch während des Tages."
    },
    {
        name: "Fast Learner",
        name_de: "Schneller Lerner",
        kategorie: "misc",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "Gain 15-30% additional EXP",
        beschreibung_de: "Erhält 15–30 % zusätzliche Erfahrung."
    },
    {
        name: "Frenetic",
        name_de: "Frenetisch",
        kategorie: "misc",
        max_stacks: 3,
        stufe: null,
        beschreibung_en: "Torpor drain increased by 7.5-15%",
        beschreibung_de: "Der Torporabbau wird um 7,5–15 % erhöht."
    }
];