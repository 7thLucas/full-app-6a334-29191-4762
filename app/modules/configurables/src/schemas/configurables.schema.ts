/* START: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */
export interface FieldSchemaType {
  fieldName?: string;
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "color"
    | "url"
    | "enum"
    | "datetime"
    | "file"
    | "files";
  required?: boolean;
  label?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  options?: string[];
  fields?: FieldSchemaType[];
  item?: FieldSchemaType;
}
/* END: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */

export type ConfigurableSchemas = {
  formSchema: FieldSchemaType[];
};



export const configurableSchemas: ConfigurableSchemas = {
  formSchema: [
    {
      fieldName: "appName",
      type: "string",
      required: true,
      label: "App Name",
    },
    {
      fieldName: "logoUrl",
      type: "url",
      required: true,
      label: "Logo URL",
    },
    {
      fieldName: "brandColor",
      type: "object",
      required: true,
      label: "Brand Color",
      fields: [
        {
          fieldName: "primary",
          type: "color",
          required: true,
          label: "Primary",
        },
        {
          fieldName: "secondary",
          type: "color",
          required: true,
          label: "Secondary",
        },
        {
          fieldName: "accent",
          type: "color",
          required: true,
          label: "Accent",
        },
      ],
    },
    {
      fieldName: "tagline",
      type: "string",
      required: false,
      label: "Tagline",
      maxLength: 200,
    },
    {
      fieldName: "heroTitle",
      type: "string",
      required: false,
      label: "Hero Title",
      maxLength: 100,
    },
    {
      fieldName: "heroSubtitle",
      type: "string",
      required: false,
      label: "Hero Subtitle",
      maxLength: 300,
    },
    {
      fieldName: "heroCTALabel",
      type: "string",
      required: false,
      label: "Hero CTA Button Label",
      maxLength: 50,
    },
    {
      fieldName: "heroImage",
      type: "file",
      required: false,
      label: "Hero Background Image",
    },
    {
      fieldName: "shopCTALabel",
      type: "string",
      required: false,
      label: "Shop CTA Button Label",
      maxLength: 50,
    },
    {
      fieldName: "categories",
      type: "array",
      required: false,
      label: "Product Categories",
      item: { type: "string", required: true },
    },
    {
      fieldName: "products",
      type: "array",
      required: false,
      label: "Products",
      item: {
        type: "object",
        fields: [
          { fieldName: "id", type: "string", required: true, label: "Product ID" },
          { fieldName: "name", type: "string", required: true, label: "Product Name" },
          { fieldName: "description", type: "string", required: false, label: "Short Description" },
          { fieldName: "price", type: "string", required: false, label: "Price (e.g. $29.99)" },
          { fieldName: "imageUrl", type: "url", required: false, label: "Product Image URL" },
          { fieldName: "category", type: "string", required: false, label: "Category" },
          { fieldName: "storeName", type: "string", required: false, label: "Store Name" },
          { fieldName: "affiliateUrl", type: "url", required: true, label: "Affiliate Link URL" },
          { fieldName: "featured", type: "boolean", required: false, label: "Featured Product" },
          { fieldName: "badge", type: "string", required: false, label: "Badge Label (e.g. Best Seller)" },
        ],
      },
    },
    {
      fieldName: "featuredSectionTitle",
      type: "string",
      required: false,
      label: "Featured Section Title",
      maxLength: 80,
    },
    {
      fieldName: "allProductsSectionTitle",
      type: "string",
      required: false,
      label: "All Products Section Title",
      maxLength: 80,
    },
    {
      fieldName: "footerText",
      type: "string",
      required: false,
      label: "Footer Text",
      maxLength: 300,
    },
    {
      fieldName: "footerDisclaimer",
      type: "string",
      required: false,
      label: "Affiliate Disclaimer",
      maxLength: 500,
    },
    {
      fieldName: "socialLinks",
      type: "object",
      required: false,
      label: "Social Links",
      fields: [
        { fieldName: "instagram", type: "url", required: false, label: "Instagram URL" },
        { fieldName: "facebook", type: "url", required: false, label: "Facebook URL" },
        { fieldName: "twitter", type: "url", required: false, label: "Twitter/X URL" },
        { fieldName: "youtube", type: "url", required: false, label: "YouTube URL" },
      ],
    },
    {
      fieldName: "showFeaturedSection",
      type: "boolean",
      required: false,
      label: "Show Featured Products Section",
    },
    {
      fieldName: "productsPerRow",
      type: "number",
      required: false,
      label: "Products Per Row (desktop)",
      min: 2,
      max: 4,
    },
  ],
};
