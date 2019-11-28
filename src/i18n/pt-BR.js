import enLocale from 'element-ui/lib/locale/lang/en'

export default {
    ...enLocale,
    router: {
        home: 'Garantia - Home',
        registration: 'Garantia - Registro',
        procedure: 'Garantia - Online Warranty Claim',
        claim: 'Garantia - Online Warranty Claim',
        form: 'Garantia - Online Warranty Claim',
        extension: 'Garantia - Warranty Extension',
        sigleItem: 'Garantia - Warranty Extension',
        multipleItems: 'Garantia - Warranty Extensionn',
    },
    index: {
        menu: {
            home: 'Home',
            warranty: 'Garantia',
            claim: 'Online Warranty Claim',
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
            warranty: 'Warranty',
            claim: 'Online Warranty Claim'
        },
    },
    claimForm: {
        breadcrumb: {
            warranty: 'Warranty',
            claimForm: 'Solicitação de Garantia Online'
        },
        productDetails: {
            title: 'Detalhes do Produto',
            serialNumber: 'Número de série',
            productModel: 'Modelo do produto',
            dateOfInstallation: 'Data da Instalação',
            wantToClaimAnAccessory: 'Incluir um acessório?',
        },
        claimantContactDetails: {
            title: 'Dados do solicitante',
            type: 'Tipo',
            ABN: 'ABN',
            Business: 'Pessoa Jurídica',
            Individual: 'Pessoa Física',
            business: {
                name: 'Nome da empresa',
                contactPerson: 'Pessoa para contato',
                contactNumber: 'Telefone',
                email: 'E-mail',
                emailPlaceholder: "separated by ','",
                addressLine1: 'Endereço',
                addressLine2: 'Bairro',
                citydistrict: 'Cidade',
                stateProvince: 'Estado',
                postCode: 'CEP',
            },
            person: {
                name: 'Nome',
                contactNumber: 'Telefone',
                email: 'E-mail',
                emailPlaceholder: "separated by ','",
                addressLine1: 'Endereço',
                addressLine2: 'Bairro',
                citydistrict: 'Cidade',
                stateProvince: 'Estado',
                postCode: 'CEP',
            },
        },
        faultDetails: {
            title: 'Detalhes da falha',
            theFaultIs: 'A falha é:',
            lcd: 'Menssagem de status no display LCD ou APP:',
            description: 'Descrição da falha',
            permanent: 'Permanente',
            intermittent: 'Intermitente',
        },
        addressDetails: {
            title: 'Endereço de envio para troca em garantia',
            sameAsClaimant: 'Mesmo endereço',
            other: 'Outro',
            shippingAddress: 'Endereço de entrega (no caso de uma unidade de reposição precisar ser entregue) ou Endereço da instalação (no caso de o engenheiro de serviço da Sungrow visitar o local)'
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
    },
    extension: {
        breadcrumb: {
            warranty: 'Warranty',
            extension: 'Extension'
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
            warranty: 'Warranty',
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
            warranty: 'Warranty',
            extension: 'Extension',
            singleItem: 'Sigle Item',
        },
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
            warranty: 'Warranty',
            extension: 'Extension',
            multipleItems: 'Multiple Items',
        },
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
            serialNumber: 'Número de série do produto',
            productModel: 'Modelo do produto',
        },
        installationDetails: {
            title: 'Informações da Instalação',
            addressLine1: 'Endereç',
            addressLine2: 'Bairro',
            cityDistrict: 'Cidade',
            stateProvince: 'Estado',
            postCode: 'CEP',
            installer: 'Nome/Empresa do instalador',
            installDate: 'Data da instalação',
            installCec: 'Relatório de aceitação da concessionária',
            invoiceUpload: 'Invoice upload',
            invoiceUploadBtn: 'Choose File',
            cecFileUpload: 'Electrical Compliance Certificate',
            cecFileUploadBtn: 'Choose File',
        },
        Suggestions: {
            title: 'Sugestões',
            suggestionsContext: 'Deixe seus comentários ou sugestões aqui?',
        },
        toTerm: 'Li e aceito o {0}',
        tos: "Termo de Garantia SUNGROW.",
        submit: 'Enviar',
        reset: 'Limpar',
        breadcrumb: {
            warranty: 'Warranty',
            extension: 'Extension',
            registration: 'Registration',
        },
        pNumTooltip: 'Please refer to the nameplate on the side of the Sungrow product.',
        ivcTooltip: 'Please attach the invoice as the evidence of the installation.Note: The maximum attachment size per file is 10 MB.',
        cecTooltip: 'Please attach the Electrical Compliance Certifcate as the evidence of the installation.Normally it will provided by the installer after installation.For different states.the name for such certifcate may vary. Note: The maximum attachment size per file is 10 MB.',
    }
};