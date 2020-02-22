import ptLocale from 'element-ui/lib/locale/lang/pt-br'

export default {
    ...ptLocale,
    pdfUrl: '../../../sun-portal/v/static/01_Politica de Garantia_Rev.3.pdf',
    router: {
        home: 'Garantia - Home',
        registration: 'Garantia - Registro',
        procedure: 'Garantia - Solicitação de Garantia Online',
        claim: 'Garantia - Solicitação de Garantia Online',
        form: 'Garantia - Solicitação de Garantia Online',
        extension: 'Garantia - Warranty Extension',
        sigleItem: 'Garantia - Warranty Extension',
        multipleItems: 'Garantia - Warranty Extensionn',
    },
    index: {
        country: 'País',
        language: 'Língua',
        menu: {
            home: 'Home',
            warranty: 'Garantia',
            claim: 'Solicitação de Garantia Online',
            registration: 'Registro',
            extension: 'Warranty Extension',
        },
        footer: {
            company: 'About Sungrow',
            products: 'Products A - Z',
            news: 'Sungrow News',
            career: 'Career',
            mission: 'Our Mission',
            howTobBuy: 'Distributors',
            events: 'Events',
            downloads: 'Downloads',
            socialResponsibility: 'Social Responsibility',
            service: 'Service',
            webinars: 'Webinars',
            copyright: '© 2019 SUNGROW. All Rights Reserved.',
            contactUs: 'Contact us',
            legalNotice: 'LegalNotice',
            privacyPolicy: 'PrivacyPolicy',
        },
    },
    claim: {
        link: {
            checkbox: 'Check here to indicate that',
            goToWarranty: 'Go to Warranty Claim Page',
            reset: 'Reset'
        },
        breadcrumb: {
            warranty: 'Garantia',
            claim: 'Solicitação de Garantia Online'
        },
    },
    claimForm: {
        breadcrumb: {
            warranty: 'Garantia',
            claimForm: 'Solicitação de Garantia Online'
        },
        productDetails: {
            title: 'Detalhes do Produto',
            serialNumber: 'Número de série é obrigatório',
            productModel: 'Modelo do produto',
            dateOfInstallation: 'Data da instalação é obrigatório',
            wantToClaimAnAccessory: 'Incluir um acessório?',
        },
        claimantContactDetails: {
            formTest:{
                billType:'Tipo é obrigatório',
                contactEmail:'Email é obrigatório',
                person:'Name do contato é obrigatório',
                contactNumber:'Número para contato é obrigatório',
                cityName:'Cidade é obrigatório',
                addressLine1:'Endereço é obrigatório',
                addressLine2:'Bairro é obrigatório',
                stateName:'Estado é obrigatório',
                postCode:'CEP é obrigatório',
                installDate:'Data da instalação é obrigatório',
                productNumber:'Número de série é obrigatório',
                fault:'Descrição da falha é obrigatório',
                description:'Description is required',
                shippingAddress:'Endereço de entrega é obrigatório',
                contactFirstName:'O nome do contato é necessário'
            },
            title: 'Dados do solicitante',
            type: 'Tipo',
            ABN: 'ABN',
            Business: 'Pessoa Jurídica',
            Individual: 'Pessoa Física',
            business: {
                name: 'Nome da empresa',
                contactPerson: 'Name do contato é obrigatório',
                contactNumber: 'Número para contato é obrigatório',
                email: 'Email é obrigatório',
                emailPlaceholder: "Separado por ;",
                addressLine1: 'Endereço é obrigatório',
                addressLine2: 'Bairro é obrigatório',
                citydistrict: 'Cidade é obrigatório',
                stateProvince: 'Estado é obrigatório',
                postCode: 'CEP é obrigatório',
            },
            person: {
                name: 'Nome',
                contactNumber: 'Número para contato é obrigatório',
                email: 'Email é obrigatório',
                emailPlaceholder: "Separado por ;",
                addressLine1: 'Endereço é obrigatório',
                addressLine2: 'Bairro é obrigatório',
                citydistrict: 'Cidade é obrigatório',
                stateProvince: 'Estado é obrigatório',
                postCode: 'CEP é obrigatório',
            },
        },
        faultDetails: {
            title: 'Detalhes da falha',
            theFaultIs: 'A falha é:',
            lcd: 'Menssagem de status no display LCD ou APP:',
            description: 'Descrição da falha é obrigatório',
            permanent: 'Permanente',
            intermittent: 'Intermitente',
        },
        addressDetails: {
            title: 'Endereço de envio para troca em garantia',
            sameAsClaimant: 'Mesmo endereço',
            other: 'Outro',
            shippingAddress: 'Endereço de entrega é obrigatório (no caso de uma unidade de reposição precisar ser entregue) ou Endereço da instalação (no caso de o engenheiro de serviço da Sungrow visitar o local)'
        },
        otherDetails: {
            title: 'Outros detalhes',
            weather: 'Is the inverter exposed to the weather (e.g. rain)?',
            location: 'Inverter Installation Location',
            weatherMsg: 'Por favor, forneça o número de referência fornecido pela equipe da Sungrow (referência de ligação telefônica ou número de ticket de e-mail).',
            battery: 'Does the inverter connect with a battery?',
            model: 'Battery brand/model',
            batteryMsg: 'Deixe seu comentário ou sugestões aqui:',
        },
        fileUpload: {
            title: 'Anexos de documentos',
            uploadLabel: ' Faça o upload de fotos ou documentos que possam ajudar no suporte à sua solicitação de garantia, como a etiqueta de dados na lateral do inversor e o status do LCD/APP, esquemas elétricos, dados do monitoramento ou outras informações do LCD/APP que possam ser relevantes. Nota: O tamanho máximo do anexo por arquivo é 10 MB.',
            uploadBtn: 'Selecionar',
        },
        toTerm: 'Li e aceito o {0}',
        tos: "termo de garantia SUNGROW.",
        submit: 'Enviar',
        reset: 'Limpar',
        submitSuccessMsg: 'Registrado com sucesso, Doc No.{0}. Você será redirecionado para a página Home em 3 segundos.',
    },
    extension: {
        breadcrumb: {
            warranty: 'Garantia',
            extension: 'Extensão'
        },
        table: {
            model: 'Model',
            partsWarranty: {
                title: 'Add 5 Years Parts Warranty',
                discount: 'Early-bird Discount',
                standard: 'Standard',
            },
            standardWarranty: {
                title: 'Add 5 Years Parts Warranty',
                discount: 'Early-bird Discount',
                standard: 'Standard',
            },
            desc: 'Prices are effective from 31 July 2019',
        },
        link: {
            title: 'Warranty extension online order',
            singleBtn: 'Sungrow warranty extension for single item',
            multipleBtn: 'Sungrow warranty extension for multiple items',
        },
    },
    procedure: {
        breadcrumb: {
            warranty: 'Garantia',
            procedure: 'Warranty Claim Procedure'
        },
        link: {
            title: 'Download',
            singleBtn: 'Sungrow service report form',
            multipeBtn: 'Service photos guide',
        }
    },
    singleItem: {
        billingDetails: {
            title: 'Billing Details',
            type: 'Type',
            ABN: 'ABN',
            businessName: 'Business Name',
            addressLine1: 'Address Line 1',
            addressLine2: 'Address Line 2',
            cityDistrict: 'City/District',
            stateProvince: 'State/Province',
            postCode: 'Post code',
        },
        contactDetails: {
            title: 'Contact Details',
            firstName: 'First name',
            lastName: 'Last name',
            email: 'Email',
            confirmYourEmail: 'Confirm your Email',
            contactNumber: 'Contact Number',
        },
        productDetails: {
            title: 'Product Details',
            serialNumber: 'Serial number',
            productModel: 'Product model',
            installDate: 'Installation date (if applicable)',
        },
        installationAddress: {
            title: 'Installation Address',
            installationAddressType: {
                title: 'The installation address is',
                sameAsBillingAddress: 'Same as billing address',
                otherAddress: 'Other address (Please fill in below)',
                notApplicable: 'Not applicable',
            },
            addressLine1: 'Address Line 1',
            addressLine2: 'Address Line 2',
            cityDistrict: 'City/District',
            stateProvinc: 'State/Provinc',
            postCode: 'Post code',
        },
        warrantyTypeToPurchase: {
            title: 'Warranty type to purchase',
            warrantyType: 'Warranty type',
            purchaseOrder: 'Purchase order (if applicable)',
        },
        totalAmountNeedToPay: {
            title: 'The total amount you need to pay is (GST excluded):',
            totalAmount: 'Total amount',
        },
        toTerm: 'I have read and agree to {0}',
        tos: "Sungrow's warranty terms.",
        submit: 'Submit',
        reset: 'Reset',
        billTypes: {
            business: 'Business',
            individual: 'Individual',
        },
        warrantyTypes: {
            partsWarranty: 'Additional 5 Years Parts Warranty',
            standard: 'Additional 5 Years Standard Warranty',
        },
        breadcrumb: {
            warranty: 'Garantia',
            extension: 'Extensão',
            singleItem: 'Item de Sigilo',
        },
        submitSuccessMsg: 'Registrado com sucesso, Doc No.{0}. Você será redirecionado para a página Home em 3 segundos.',
    },
    multipleItems: {
        billingDetails: {
            title: 'Billing Details',
            type: 'Type',
            ABN: 'ABN',
            businessName: 'Business Name',
            addressLine1: 'Address Line 1',
            addressLine2: 'Address Line 2',
            cityDistrict: 'City/District',
            stateProvince: 'State/Province',
            postCode: 'Post code',
        },
        contactDetails: {
            title: 'Contact Details',
            firstName: 'First name',
            lastName: 'Last name',
            email: 'Email',
            confirmYourEmail: 'Confirm your Email',
            contactNumber: 'Contact Number',
        },
        productList: {
            title: 'Product list',
            purchaseOrder: 'Purchase Order',
            type: 'Type',
            TypeContext: 'Please select here to add multiple inverters',
            singleInverter: {
                serialNumber: 'Serial number',
                productModel: 'Product model',
                warrantyType: 'Warranty type',
                amount: 'Amount',
                add: 'Add',
                delete: 'Delete',
            },
            multipleInverters: {
                warrantyType: 'Warranty type',
                serialNumberList: 'Serial number List',
                serialNumberListPlaceholder: 'Please enter the device serial number separated by ","',
                amount: 'Amount',
                add: 'Add',
                delete: 'Delete',
            },
        },
        toTerm: 'I have read and agree to {0}',
        tos: "Sungrow's warranty terms.",
        reView: 'Review',
        submit: 'Submit',
        reset: 'Reset',
        OrderReview: {
            title: 'Order Review',
            headerTxt: 'Please check all the contents below. If any items are incorrect, please go back to the form and update before submitting.',
            form: {
                businessName: 'Business name:',
                ContactName: 'Contact name:',
                emailAddress: 'Email address:',
                contactNumber: 'Contact number:',
                address: 'Address:',
                ABN: 'ABN:',
                totalItem: 'Total item:',
                totalAmount1: 'Total amount (excl. GST):',
                totalGST: 'Total GST:',
                totalAmount2: 'Total amount (incl. GST):',
            },
            table: {
                productModel: 'Product model',
                serialNumber: 'Serial number',
                warrantyType: 'Warranty type',
                discount: 'Discount',
                productModel: 'Product model',
            },
            confirm: 'Confirm',
            cancel: 'Cancel'
        },
        billTypes: {
            business: 'Business',
            individual: 'Individual',
        },
        warrantyTypes: {
            partsWarranty: 'Additional 5 Years Parts Warranty',
            standard: 'Additional 5 Years Standard Warranty',
        },
        breadcrumb: {
            warranty: 'Garantia',
            extension: 'Extensão',
            multipleItems: 'Vários itens',
        },
        submitSuccessMsg: 'Registrado com sucesso, Doc No.{0}. Você será redirecionado para a página Home em 3 segundos.',
    },
    registration: {
        contactDetails: {
            title: 'Dados pessoais',
            firstName: 'Primeiro nome',
            lastName: 'Último nome',
            email: 'E-mail',
            contactNumber: 'Telefone para contato',
        },
        productDetails: {
            title: 'Informações do produto',
            serialNumber: 'Número de série é obrigatório',
            productModel: 'Modelo do produto',
        },
        installationDetails: {
            title: 'Informações da Instalação',
            addressLine1: 'Endereço',
            addressLine2: 'Bairro',
            cityDistrict: 'Cidade é obrigatório',
            stateProvince: 'Estado',
            postCode: 'CEP',
            installer: 'Nome/Empresa do instalador',
            installDate: 'Data da instalação é obrigatório',
            installCec: 'Relatório de aceitação da concessionária',
            invoiceUpload: 'Invoice upload',
            invoiceUploadBtn: 'Choose File',
            cecFileUpload: 'Certificado de instalação e homologação',
            cecFileUploadBtn: 'Choose File',
        },
        Suggestions: {
            title: 'Deixe seus comentários ou sugestões aqui:',
            suggestionsContext: 'Deixe seus comentários ou sugestões aqui?',
        },
        toTerm: 'Li e aceito o {0}',
        tos: "Termo de Garantia SUNGROW.",
        submit: 'Enviar',
        reset: 'Limpar',
        breadcrumb: {
            warranty: 'Garantia',
            extension: 'Extensão',
            registration: 'Registo',
        },
        pNumTooltip: 'Por favor, insira o número de série que está na etiqueta localizada na lateral do inversor',
        ivcTooltip: 'Por favor, anexar o certificado ou carta de aceite da concessionária local provando que a instalação foi homologada de acordo com as normas locais. Normalmente este relatório é entregue à empresa instaladora que executou o projeto. O anexo máximo é de 10MB por arquivo.',
        submitSuccessMsg: 'Registrado com sucesso, Doc No.{0}. Você será redirecionado para a página Home em 3 segundos.',
    }
};