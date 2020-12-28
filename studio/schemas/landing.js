export default {
    "type": "document",
    "name": "landing",
    "title": "Landing Page",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "meta_title",
            "title": "Meta Title",
            "description": "The meta title of the page (recommended length is 50–60 characters)",
            "validation": null
        },
        {
            "type": "string",
            "name": "meta_description",
            "title": "Meta Description",
            "description": "The meta description of the page (recommended length is 50–160 characters)",
            "validation": null
        },
        {
            "type": "string",
            "name": "canonical_url",
            "title": "Canonical URL",
            "description": "The canonical url of the page",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "no_index",
            "title": "No Index",
            "description": "Tell search engines not to index this page",
            "validation": null
        },
        {
            "type": "array",
            "name": "sections",
            "title": "Sections",
            "description": "Page sections",
            "validation": null,
            "of": [
                {
                    "type": "section_content"
                },
                {
                    "type": "section_cta"
                },
                {
                    "type": "section_faq"
                },
                {
                    "type": "section_features"
                },
                {
                    "type": "section_hero"
                },
                {
                    "type": "section_posts"
                },
                {
                    "type": "section_pricing"
                },
                {
                    "type": "section_reviews"
                },
                {
                    "type": "section_contact"
                }
            ]
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "landing"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}