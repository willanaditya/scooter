// sanity/schemaTypes/landingPageType.ts
import { defineField, defineType, defineArrayMember } from "sanity"

export const landingPageType = defineType({
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [

    // 1. Hero Section
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Hero Title", type: "string" }),
        defineField({ name: "description", title: "Hero Description", type: "text" }),
        defineField({ name: "image", title: "Hero Image", type: "image", options: { hotspot: true } }),
        defineField({
          name: "stats",
          title: "Hero Stats",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "heroStat",
              title: "Hero Stat",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
                defineField({ name: "value", title: "Value", type: "string" })
              ]
            })
          ]
        })
      ]
    }),

    // 2. Product Information
    defineField({
      name: "productInformation",
      title: "Product Information",
      type: "object",
      fields: [
        defineField({ name: "image", title: "Product Image", type: "image" }),
        defineField({
          name: "features",
          title: "Features",
          type: "array",
          of: [defineArrayMember({ type: "string" })]
        })
      ]
    }),

    // 3. Motor Section
    defineField({
      name: "motor",
      title: "Motor Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "image", title: "Motor Image", type: "image" })
      ]
    }),

    // 4. Accessories Section
    defineField({
      name: "accessories",
      title: "Accessories",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "accessory",
          title: "Accessory",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({ name: "image", title: "Accessory Image", type: "image" }),
            defineField({
              name: "features",
              title: "Features",
              type: "array",
              of: [defineArrayMember({ type: "string" })]
            })
          ]
        })
      ]
    }),

    // 5. Gallery Section
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [defineArrayMember({ type: "image" })]
    }),

    // 6. Colors Section
    defineField({
      name: "colors",
      title: "Color Variants",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "colorVariant",
          title: "Color Variant",
          fields: [
            defineField({ name: "name", title: "Color Name", type: "string" }),
            defineField({ name: "image", title: "Color Image", type: "image" })
          ]
        })
      ]
    }),

    // 7. Testimonials Section
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "testimonial",
          title: "Testimonial",
          fields: [
            defineField({ name: "name", title: "Person Name", type: "string" }),
            defineField({ name: "image", title: "Person Image", type: "image" }),
            defineField({ name: "review", title: "Review", type: "text" }),
            defineField({ name: "rating", title: "Rating", type: "number" })
          ]
        })
      ]
    }),

    // 8. Newsletter Section
    defineField({
      name: "newsletter",
      title: "Newsletter Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({ name: "buttonText", title: "Button Text", type: "string" })
      ]
    }),

    // 9. Footer Section
    defineField({
      name: "footer",
      title: "Footer Section",
      type: "object",
      fields: [
        defineField({ name: "logo", title: "Footer Logo", type: "image" }),
        defineField({
          name: "links",
          title: "Footer Links",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "footerLink",
              title: "Footer Link",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
                defineField({ name: "url", title: "URL", type: "url" })
              ]
            })
          ]
        })
      ]
    })
  ]
})
