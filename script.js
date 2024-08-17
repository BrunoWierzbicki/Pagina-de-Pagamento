document.addEventListener("DOMContentLoaded", function() {
    const valorInput = document.getElementById("valor");
    const informarDadosBtn = document.getElementById("informar-dados");
    const pagarBtnPix = document.getElementById("pix-pagar");
    const pagarBtnCreditCard = document.getElementById("credit-card-pagar");
    const pixPanel = document.getElementById("pix-panel");
    const creditCardPanel = document.getElementById("credit-card-panel");
    const successMessage = document.getElementById("success-message");
    const cardNumberInput = document.getElementById("card-number");
    const cardFlag = document.getElementById("card-flag");
    const cardError = document.getElementById("card-error");
    const installmentsSelect = document.getElementById("installments");
    const pixTotalDisplay = document.getElementById("pix-total");
    const creditCardTotalDisplay = document.getElementById("credit-card-total");

    const pixRadio = document.getElementById("pix");
    const creditCardRadio = document.getElementById("credit-card");

    function resetPanels() {
        pixPanel.classList.add("hidden");
        creditCardPanel.classList.add("hidden");
        cardError.classList.add("hidden");
        cardFlag.classList.add("hidden");
        successMessage.classList.add("hidden");
        pagarBtnPix.classList.add("hidden");
        pagarBtnCreditCard.classList.add("hidden");
    }

    function calculatePixTotal(value) {
        return value * 0.9;
    }

    function calculateCreditCardTotal(value, installments) {
        let total = value;
        if (installments == 4) {
            total += value * 0.05;
        } else if (installments == 5) {
            total += value * 0.1;
        }
        return total;
    }

    informarDadosBtn.addEventListener("click", function() {
        const value = parseFloat(valorInput.value);
        if (isNaN(value) || value <= 0) {
            alert("O campo valor deve ser preenchido corretamente.");
            return;
        }

        resetPanels();

        if (pixRadio.checked) {
            const pixTotal = calculatePixTotal(value);
            pixTotalDisplay.textContent = pixTotal.toFixed(2);
            pixPanel.classList.remove("hidden");
            pagarBtnPix.classList.remove("hidden");
        } else if (creditCardRadio.checked) {
            creditCardPanel.classList.remove("hidden");
            pagarBtnCreditCard.classList.remove("hidden");
        }
    });

    cardNumberInput.addEventListener("input", function() {
        const cardNumber = cardNumberInput.value;
        if (cardNumber.startsWith("1234")) {
            cardFlag.src = "visa.jpeg";  
            cardFlag.classList.remove("hidden");
            cardError.classList.add("hidden");
        } else if (cardNumber.startsWith("4321")) {
            cardFlag.src = "master.jpg"; 
            cardFlag.classList.remove("hidden");
            cardError.classList.add("hidden");
        } else if (cardNumber.length > 0) {
            cardFlag.classList.add("hidden");
            cardError.classList.remove("hidden");
        } else {
            cardFlag.classList.add("hidden");
            cardError.classList.add("hidden");
        }
    });

    installmentsSelect.addEventListener("change", function() {
        const value = parseFloat(valorInput.value);
        const installments = parseInt(installmentsSelect.value);
        const total = calculateCreditCardTotal(value, installments);
        creditCardTotalDisplay.textContent = total.toFixed(2);
    });

    pagarBtnPix.addEventListener("click", function() {
        successMessage.classList.remove("hidden");
        pixPanel.classList.add("hidden");
    });

    pagarBtnCreditCard.addEventListener("click", function() {
        successMessage.classList.remove("hidden");
        creditCardPanel.classList.add("hidden");
    });

    // Alterna entre Pix e Cartão de Crédito
    document.querySelectorAll('input[name="payment-method"]').forEach((radio) => {
        radio.addEventListener("change", resetPanels);
    });
});
