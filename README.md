Página de Pagamento

Este projeto é uma página de pagamento para um site de compras, oferecendo duas opções de pagamento: Pix e Cartão de Crédito. A interface da aplicação é simples e foi desenvolvida para caber em um layout de 400x600 pixels. Além disso, o código JavaScript controla as funcionalidades de exibição dinâmica de campos de pagamento e cálculo de valores.
Estrutura do Projeto

    HTML: A estrutura principal da página.
    CSS: Estilos básicos para o layout e formatação da página.
    JavaScript: Manipulação de eventos, cálculos de desconto e parcelas, e lógica de exibição.

Funcionalidades

    Pagamento via Pix:
        O valor é calculado com um desconto de 10%.
        O usuário deve informar o CPF.
        Exibe uma mensagem de sucesso após o pagamento.

    Pagamento via Cartão de Crédito:
        O usuário deve informar o número do cartão, titular, código de segurança e data de vencimento.
        O número do cartão "1234" exibe a bandeira Visa, e o número "4321" exibe a bandeira MasterCard.
        O valor total é ajustado de acordo com a quantidade de parcelas (acréscimo de 5% para 4 parcelas e 10% para 5 parcelas).
        Exibe uma mensagem de sucesso após o pagamento.
