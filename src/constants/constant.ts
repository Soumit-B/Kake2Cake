export const BASE_URL = {
    DOMAIN: "http://localhost",
    PORT: "50815"//"8100"
}

export const ADMIN_API_LIST = {
    // TOKEN: "/token"
    TOKEN: '/assets/stubs/token.json',
    // LOGIN: 'api/Login',
    LOGIN: '/assets/stubs/login.json',
    GET_PRODUCT_TYPE_LIST: '/api/List/GetProductTypeForAdmin',//'/assets/stubs/getProductTypeList.json',
    INSERT_PRODUCT_TYPE: '/api/List/InsertListDetailsForAdmin',
    UPDATE_PRODUCT_TYPE: '/api/List/UpdateListDetailsForAdmin',
    GET_PRODUCT_TYPE_DETAILS: '/api/list/GetProductTypeFoAdminByProductID?ProductTypeID=<itemID>',
    DELETE_PRODUCT_TYPE: '/api/List/DeleteListDetails',
    GET_KTC_PRODUCT_LIST: '/api/ListItem/GetProductsForAdmin',//'/assets/stubs/getKtcProductList.json',
    INSERT_KTC_PRODUCT: '/api/ListItem/InsertListItemDetailsForAdmin',
    UPDATE_KTC_PRODUCT: '/api/ListItem/UpdateListItemDetailsForAdmin',
    DELETE_KTC_PRODUCT: '/api/ListItem/DeleteListItemDetails',
    GET_KTC_PRODUCT_DETAILS: '/api/listitem/GetProductForAdminByProductID?ProductID=<itemID>',
    GET_COMPANY_LIST: '/api/Company/GetCompanyDetails',//'/assets/stubs/getCompanyList.json',
    INSERT_KTC_COMPANY: '/api/Company/InsertCompanyDetails',
    UPDATE_KTC_COMPANY: '/api/Company/UpdateCompanyDetails',
    DELETE_KTC_COMPANY: '/api/Company/DeleteCompanyDetails',
    GET_KTC_COMPANY_DETAILS: '/api/Company/GetCompanyDetailsByCompanyID?CompanyID=<itemID>',
    GET_EVENT_LIST: '/api/Event/GetEventDetailsForAdmin',
    INSERT_KTC_EVENT: '/api/Event/InsertEventDetailsForAdmin',
    UPDATE_KTC_EVENT: '/api/Event/UpdateEventDetailsForAdmin',
    DELETE_KTC_EVENT: '/api/Event/DeleteEventDetailsForAdmin',
    GET_KTC_EVENT_DETAILS: '/api/Event/GetEventDetailsForAdminByEventID?EventID=<itemID>',
    GET_KTC_ITEMS_LIST: '/api/Item/GetItemDetailsForAdmin',
    INSERT_KTC_ITEMS: '/api/item/InsertItemDetails',
    UPDATE_KTC_ITEMS: '/api/item/UpdateItemDetails',
    DELETE_KTC_ITEMS: '/api/item/DeleteItemDetails',
    GET_KTC_ITEMS_DETAILS: '/api/item/GetItemDetailsForAdminByItemType?ID=<itemID>',
    GET_KTC_COMBO_LIST: '/api/ComboItem/GetComboItemDetailsForAdmin',
    INSERT_KTC_COMBO: '/api/ComboItem/InsertComboItemDetails',
    UPDATE_KTC_COMBO: '/api/ComboItem/UpdateComboItemDetails',
    DELETE_KTC_COMBO: '/api/ComboItem/DeleteComboItemDetails',
    GET_KTC_COMBO_DETAILS: '/api/ComboItem/GetComboItemDetailsForAdminOnComboID?ID=<itemID>'
}

export const FIELD_API_LIST = {
    GET_PRODUCT_TYPE_LIST: '/api/getProductTypeList',
    GET_PRODUCT_NAME_LIST: '/api/GetProduct?ProductTypeID=<itemID>',
    GET_COMPANY_LIST: '/api/GetCompanyDetailsForItem'
}