import enLocale from 'element-ui/lib/locale/lang/en'

export default {
  ...enLocale,
  index: {
    menu: {
      home: 'Home',
      warranty: 'Warranty',
      claim: 'Online Warranty Claim',
      registration: 'Warranty Registration',
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
      claimForm: 'Online Warranty Claim Form'
    },
    productDetails: {
      title: 'Product Details',
      serialNumber: 'Serial number',
      productModel: 'Product model',
      dateOfInstallation: 'Date of installation',
      wantToClaimAnAccessory: 'Want to claim an accessory?',
    },
    claimantContactDetails: {
      title: 'Claimant Contact Details',
      type: 'Type',
      ABN: 'ABN',
      business: {
        name: 'Business Name',
        contactPerson: 'Contact person',
        contactNumber: 'Contact number',
        email: 'Email',
        emailPlaceholder: "separated by ','",
        addressLine1: 'Address Line 1',
        addressLine2: 'Address Line 2',
        citydistrict: 'City/District',
        stateProvince: 'State/Province',
        postCode: 'Post code',
      },
      person: {
        name: 'Name',
        contactNumber: 'Contact number',
        email: 'Email',
        emailPlaceholder: "separated by ','",
        addressLine1: 'Address Line 1',
        addressLine2: 'Address Line 2',
        citydistrict: 'City/District',
        stateProvince: 'State/Province',
        postCode: 'Post code',
      },
    },
    faultDetails: {
      title: 'Fault Details',
      theFaultIs: 'The fault is',
      lcd: 'Status message on the LCD:',
      description: 'Fault description:',
    },
    addressDetails: {
      title: 'Shipping Address',
      sameAsClaimant: 'Same as claimant',
      other: 'Other',
      shippingAddress: 'Shipping Address (in case that a replacement unit needs to be delivered) or Installation Adderss (in case that Sungrow Service Engineer will go on site)'
    },
    otherDetails: {
      title: 'Other Details',
      weather: 'Is the inverter exposed to the weather (e.g. rain)?',
      location: 'Inverter Installation Location',
      weatherMsg: 'Please provide the reference number that provided by Sungrow staff (either Phone call reference or 5 digits Email ticket number#).',
      battery: 'Does the inverter connect with a battery?',
      model: 'Battery brand/model',
      batteryMsg: 'Please leave any comments here',
    },
    fileUpload: {
      title: 'File Upload',
      uploadLabel: 'Please upload any pictures or documents that can support your warranty claim, such as the data sticker on a side of the inverter, and the LCD status or other LCD info that may be relevant.Note: The maximum attachment size per file is 10 MB.',
      uploadBtn: 'Choose File',
      toTerm: 'I have read and agree to {0}',
      tos: "Sungrow's warranty terms.",
      submit: 'Submit',
      reset: 'Reset',
    },
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
};
