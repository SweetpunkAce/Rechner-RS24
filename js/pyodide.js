let pyodide;

async function initializePyodide() {
    try {
        document.getElementById("status").textContent =
            "Pyodide wird geladen...";

        pyodide = await loadPyodide();

        document.getElementById("status").textContent =
            "Python wird geladen...";

        const response = await fetch("python/rechner/calculator.py");

        if (!response.ok) {
            throw new Error(
                `Python-Datei konnte nicht geladen werden: ${response.status}`
            );
        }

        const pythonCode = await response.text();

        pyodide.runPython(pythonCode);

        const result = pyodide.runPython("test_calculation()");

        document.getElementById("status").textContent = result;

        console.log("Pyodide erfolgreich initialisiert.");
        console.log("Python-Ergebnis:", result);

    } catch (error) {
        console.error("Fehler beim Initialisieren von Pyodide:", error);

        document.getElementById("status").textContent =
            "Fehler beim Laden von Python.";
    }
}

initializePyodide();