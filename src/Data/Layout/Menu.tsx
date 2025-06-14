import { MenuItem } from "@/Types/LayoutTypes";

export const MenuList: MenuItem[] | undefined = [

 {
  title: "Home",
  lanClass: "lan-1",
  menucontent: "Dashboards,Widgets",
  Items: [
    {
      title: "Policy",
      id: 1,
      icon: "home",
      type: "sub",
      children: [
        {
          path: "/Policy/Upcoming",
          title: "Upcoming",
          type: "link",
          lanClass: "lan-4",
          children: [
            { path: "/Policy/Upcoming/Fresh", title: "Fresh", type: "link" },
            { path: "/Policy/Upcoming/Renewal", title: "renewal", type: "link" }
          ]
        },
        { path: "/Policy/Converted", title: "Converted", type: "link", lanClass: "lan-5" },
        { path: "/Policy/Installments", title: "Installments", type: "link" }
      ]
    },
    {
      title: "Accounts",
      id: 34,
      icon: "form",
      type: "sub",
      children: [
        {
          path: "/app/accounts/uninvoiced",
          title: "Uninvoiced",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/accounts/invoice",
          title: "Invoice",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/accounts/reconciliation-errors",
          title: "Reconciliation Errors",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/accounts/tds-reconciliation",
          title: "TDS Reconciliation",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/accounts/pending-payout",
          title: "Pending Payout",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/accounts/referrer-payment",
          title: "POS Payments",
          type: "link",
          lanClass: "lan-4"
        }
      ]
    },
    {
      title: "Reports",
      id: 35,
      icon: "form",
      type: "sub",
      children: [
        {
          path: "/app/reports/client-accounts",
          title: "Client Accounts",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/irda-statement",
          title: "IRDA Statement",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/premium-register",
          title: "Premium Register",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/business-statement",
          title: "Business Statement",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/lost-business",
          title: "Lost Business Report",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/declined-business",
          title: "Declined Business Report",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/login-user",
          title: "Login User Report",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/member-business-summary",
          title: "Member Business Summary Report",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/month-wise-business",
          title: "Month Wise Business Report",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/claim-acknowledgement",
          title: "Claim Acknowledgement Report",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/list",
          title: "List",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/activity",
          title: "Activity Report",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/tickets",
          title: "Tickets",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/posp-activation",
          title: "POSP Activation Report",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/stage-wise",
          title: "Stage Wise Report",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/posp-onboarding-status",
          title: "POSP Onboarding Status Report",
          type: "link",
          lanClass: "lan-4"
        },
        {
          path: "/app/reports/pos-payout",
          title: "POS PAYOUT REPORT",
          type: "link",
          lanClass: "lan-4"
        }
      ]
    },

{
  title: "OCR",
  id: 36,
  icon: "form",
  type: "sub",
  children: [
    {
      path: "/app/ocr/uploadpolicy",
      title: "Upload Policy",
      type: "link",
      lanClass: "lan-4"
    },
    {
      path: "/app/ocr/policy-extraction-requests",
      title: "Policy Extraction Requests",
      type: "link",
      lanClass: "lan-4"
    }
  ]
},

 
      {
        title: "Dashboard ",
        id: 1,
        icon: "home",
        type: "sub",
        lanClass: "lan-3",
        children: [
          { path: "/dashboard/default_dashboard", title: "Default", type: "link", lanClass: "lan-4" },
          { path: "/dashboard/project", title: "Project", type: "link", lanClass: "lan-5" },
          { path: "/dashboard/ecommerce", title: "Ecommerce", type: "link" },
          { path: "/dashboard/education", title: "Education", type: "link" },
        ],
      },
      {
        title: "Widgets",
        id: 2,
        icon: "widget",
        type: "sub",
        lanClass: "lan-6",
        active: false,
        children: [
          { path: "/widgets/general", title: "General", type: "link" },
          { path: "/widgets/chart", title: "Chart", type: "link" },
        ],
      },
    ],
  },
  {
    title: "Applications",
    lanClass: "lan-8",
    menucontent: "Ready to use Apps",
    Items: [
      {
        title: "Project",
        id: 3,
        icon: "project",
        type: "sub",
        active: false,
        children: [
          { path: "/project/project_list", type: "link", title: "Project List" },
          { path: "/project/new_project", type: "link", title: "Create New" },
        ],
      },
      { path: "/app/file_manager", icon: "file", title: "File Manager", type: "link" },
      {
        title: "Ecommerce",
        id: 6,
        icon: "ecommerce",
        type: "sub",
        active: false,
        children: [
          { path: "/ecommerce/add_product", title: "Add Product", type: "link" },
          { path: "/ecommerce/product", title: "Product", type: "link" },
          { path: "/ecommerce/product_page", title: "Product Page", type: "link" },
          { path: "/ecommerce/product_list", title: "Product List", type: "link" },
          { path: "/ecommerce/payment_details", title: "Payment Details", type: "link" },
          { path: "/ecommerce/recent_order", title: "Order History", type: "link" },
          {
            title: "Invoice",
            type: "sub",
            children: [
              { path: "/ecommerce/invoice/invoice_1", title: "Invoice-1", type: "link" },
              { path: "/ecommerce/invoice/invoice_2", title: "Invoice-2", type: "link" },
              { path: "/ecommerce/invoice/invoice_3", title: "Invoice-3", type: "link" },
              { path: "/ecommerce/invoice/invoice_4", title: "Invoice-4", type: "link" },
              { path: "/ecommerce/invoice/invoice_5", title: "Invoice-5", type: "link" },
              { path: "/ecommerce/invoice/invoice_6", title: "Invoice-6", type: "link" },
            ],
          },
          { path: "/ecommerce/cart", title: "Cart", type: "link" },
          { path: "/ecommerce/wishlist", title: "Wishlist", type: "link" },
          { path: "/ecommerce/checkout", title: "Checkout", type: "link" },
          { path: "/ecommerce/pricing", title: "Pricing", type: "link" },
        ],
      },
      { path: "/app/letter_box", icon: "email", title: "Letter Box", type: "link", id: 7 },
      {
        title: "Chat",
        id: 8,
        icon: "chat",
        type: "sub",
        active: false,
        children: [
          { path: "/chat/private_chat", type: "link", title: "Private Chat" },
          { path: "/chat/group_chat", type: "link", title: "Group Chat" },
        ],
      },
      {
        title: "Users",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          { path: "/users/user_profile", type: "link", title: "User Profile" },
          { path: "/users/edit_profile", type: "link", title: "User Edit" },
          { path: "/users/user_cards", type: "link", title: "User Cards" },
        ],
      },
      { path: "/app/bookmarks", icon: "bookmark", type: "link", title: "Bookmarks", id: 10 },
      { path: "/app/contacts", title: "Contacts", icon: "contact", type: "link", id: 11, active: false },
      { path: "/app/task", icon: "task", type: "link", title: "Task" },
      { path: "/app/calendar", icon: "calendar", type: "link", title: "Calendar" },
      { path: "/app/social_app", icon: "social", type: "link", title: "Social App" },
      { path: "/app/todo_app", icon: "to-do", type: "link", title: "Todo" },
      { path: "/app/search_website", icon: "search", type: "link", title: "Search Result" },
    ],
  },
  {
    title: "Forms & Table",
    menucontent: "Ready to use forms & tables",
    Items: [
      {
        title: "Forms",
        id: 17,
        icon: "form",
        type: "sub",
        active: false,
        children: [
          {
            title: "Form Controls",
            type: "sub",
            children: [
              { path: "/forms/form_controls/validation_form", title: "Form Validation", type: "link" },
              { path: "/forms/form_controls/base_input", title: "Base Inputs", type: "link" },
              { path: "/forms/form_controls/radio_&_checkbox", title: "Checkbox & Radio", type: "link" },
              { path: "/forms/form_controls/input_groups", title: "Input Groups", type: "link" },
              { path: "/forms/form_controls/input_mask", title: "Input Mask", type: "link" },
              { path: "/forms/form_controls/mega_option", title: "Mega Option", type: "link" },
            ],
          },
          {
            title: "Form Widget",
            type: "sub",
            children: [
              { path: "/forms/form_widget/datepicker", title: "Datepicker", type: "link" },
              { path: "/forms/form_widget/touchspin", title: "Touchspin", type: "link" },
              { path: "/forms/form_widget/switch", title: "Switch", type: "link" },
              { path: "/forms/form_widget/typeahead", title: "Typeahead", type: "link" },
              { path: "/forms/form_widget/clipboard", title: "Clipboard", type: "link" },
            ],
          },
          {
            title: "Form Layout",
            type: "sub",
            children: [
              { path: "/forms/form_layout/form_wizard_1", title: "Form Wizard 1", type: "link" },
              { path: "/forms/form_layout/form_wizard_2", title: "Form Wizard 2", type: "link" },
              { path: "/forms/form_layout/two_factor", title: "Two Factor", type: "link" },
            ],
          },
        ],
      },

      {
        title: "Table",
        icon: "table",
        id: 18,
        type: "sub",
        children: [
          {
            title: "Reactstrap Tables",
            type: "sub",
            children: [
              {
                title: "Basic Tables",
                type: "link",
                path: "/table/reactstrap_table/basic_table",
              },
              {
                title: "Table Components",
                type: "link",
                path: "/table/reactstrap_table/table_component",
              },
            ],
          },
          {
            title: "Data Tables",
            type: "sub",
            children: [
              { path: "/table/data_table/basic_init", title: "Basic Init", type: "link" },
              { path: "/table/data_table/advance_init", title: "Advance Init", type: "link" },
              { path: "/table/data_table/api", title: "API", type: "link" },
              { path: "/table/data_table/data_sources", title: "Data Source", type: "link" },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Components",
    menucontent: "UI Components & Elements",
    Items: [
      {
        title: "Ui-Kits",
        icon: "ui-kits",
        id: 19,
        type: "sub",
        active: false,
        children: [
          { path: "/ui_kits/typography", title: "Typography", type: "link" },
          { path: "/ui_kits/avatars", title: "Avatars", type: "link" },
          { path: "/ui_kits/helper_classes", title: "Helper Classes", type: "link" },
          { path: "/ui_kits/grid", title: "Grid", type: "link" },
          { path: "/ui_kits/tag_&_pills", title: "Tag & Pills", type: "link" },
          { path: "/ui_kits/progress", title: "Progress", type: "link" },
          { path: "/ui_kits/modal", title: "Modal", type: "link" },
          { path: "/ui_kits/alert", title: "Alert", type: "link" },
          { path: "/ui_kits/popover", title: "Popover", type: "link" },
          { path: "/ui_kits/tooltip", title: "Tooltip", type: "link" },
          { path: "/ui_kits/dropdown", title: "Dropdown", type: "link" },
          { path: "/ui_kits/accordion", title: "Accordion", type: "link" },
          { path: "/ui_kits/tabs", title: "Tabs", type: "link" },
          { path: "/ui_kits/lists", title: "Lists", type: "link" },
        ],
      },

      {
        title: "Bonus-Ui",
        icon: "bonus-kit",
        id: 20,
        type: "sub",
        active: false,
        children: [
          { path: "/bonus_ui/scrollable", title: "Scrollable", type: "link" },
          { path: "/bonus_ui/tree_view", title: "Tree View", type: "link" },
          { path: "/bonus_ui/toasts", title: "Toasts", type: "link" },
          { path: "/bonus_ui/rating", title: "Rating", type: "link" },
          { path: "/bonus_ui/dropzone", title: "Dropzone", type: "link" },
          { path: "/bonus_ui/tour", title: "Tour", type: "link" },
          { path: "/bonus_ui/sweetalert_2", title: "SweetAlert2", type: "link" },
          { path: "/bonus_ui/owl_carousel", title: "Owl Carousel", type: "link" },
          { path: "/bonus_ui/ribbons", title: "Ribbons", type: "link" },
          { path: "/bonus_ui/pagination", title: "Pagination", type: "link" },
          { path: "/bonus_ui/breadcrumb", title: "Breadcrumb", type: "link" },
          { path: "/bonus_ui/range_slider", title: "Range Slider", type: "link" },
          { path: "/bonus_ui/image_cropper", title: "Image Cropper", type: "link" },
          { path: "/bonus_ui/basic_cards", title: "Basic Card", type: "link" },
          { path: "/bonus_ui/creative_cards", title: "Creative Card", type: "link" },
          { path: "/bonus_ui/timeline", title: "Timeline", type: "link" },
        ],
      },

      {
        title: "Icons",
        icon: "icons",
        id: 21,
        type: "sub",
        active: false,
        children: [
          { path: "/icons/flag_icons", title: "Flag Icon", type: "link" },
          { path: "/icons/font_awesome_icon", title: "Fontawesome Icon", type: "link" },
          { path: "/icons/ico_icon", title: "Ico Icon", type: "link" },
          { path: "/icons/themify_icon", title: "Themify Icon", type: "link" },
          { path: "/icons/feather_icon", title: "Feather Icon", type: "link" },
          { path: "/icons/weather_icon", title: "Weather Icon", type: "link" },
        ],
      },

      {
        title: "Buttons",
        icon: "button",
        id: 22,
        type: "sub",
        active: false,
        children: [
          { path: "/buttons/default_style", title: "Default Style", type: "link" },
          { path: "/buttons/flat_style", title: "Flat Style", type: "link" },
          { path: "/buttons/edge_style", title: "Edge Style", type: "link" },
          { path: "/buttons/raised_style", title: "Raised Style", type: "link" },
          { path: "/buttons/button_group", title: "Button Group", type: "link" },
        ],
      },

      {
        title: "Charts",
        icon: "charts",
        type: "sub",
        id: 23,
        active: false,
        children: [
          { path: "/charts/apex_chart", type: "link", title: "Apex Chart" },
          { path: "/charts/google_chart", type: "link", title: "Google Chart" },
          { path: "/charts/chart_JS_chart", type: "link", title: "Chart JS Chart" },
        ],
      },
    ],
  },
  {
    title: "Pages",
    menucontent: "All neccesory pages added",
    Items: [
      {
        icon: "sample-page",
        id: 24,
        active: false,
        path: "/pages/sample_page",
        title: "Sample Page",
        type: "link",
      },
      {
        title: "Others",
        icon: "others",
        id: 25,
        type: "sub",
        children: [
          {
            title: "Error Pages",
            type: "sub",
            children: [
              { path: "/others/errors/error400", title: "Error 400", type: "link" },
              { path: "/others/errors/error401", title: "Error 401", type: "link" },
              { path: "/others/errors/error403", title: "Error 403", type: "link" },
              { path: "/others/errors/error404", title: "Error 404", type: "link" },
              { path: "/others/errors/error500", title: "Error 500", type: "link" },
              { path: "/others/errors/error503", title: "Error 503", type: "link" },
            ],
          },
          {
            title: "Authentication",
            type: "sub",
            children: [
              { path: "/others/authentication/loginsimple", title: "Login Simple", type: "link" },
              { path: "/others/authentication/loginbgimage", title: "Login With Bg Image", type: "link" },
              { path: "/others/authentication/loginbgimagetwo", title: "Login With Image Two", type: "link" },
              { path: "/others/authentication/loginvalidation", title: "Login With Validation", type: "link" },
              { path: "/others/authentication/logintooltip", title: "Login With Tooltip", type: "link" },
              { path: "/others/authentication/loginsweetalert", title: "Login With Sweetalert", type: "link" },
              { path: "/others/authentication/registersimple", title: "Register Simple", type: "link" },
              { path: "/others/authentication/registerbgimage", title: "Register With Bg Image", type: "link" },
              { path: "/others/authentication/registerbgimagetwo", title: "Register With Bg Two", type: "link" },
              { path: "/others/authentication/registerwizard", title: "Register Wizard", type: "link" },
              { path: "/others/authentication/unlockuser", title: "Unlock User", type: "link" },
              { path: "/others/authentication/forgetpassword", title: "Forget Password", type: "link" },
              { path: "/others/authentication/createpassword", title: "Reset Password", type: "link" },
              { path: "/others/authentication/maintenance", title: "Maintenance", type: "link" },
            ],
          },
          {
            title: "Coming Soon",
            type: "sub",
            children: [
              { path: "/others/coming_soon/comingsoonsimple", title: "Coming Simple", type: "link" },
              { path: "/others/coming_soon/comingbgvideo", title: "Coming With Bg Video", type: "link" },
              { path: "/others/coming_soon/comingbgimg", title: "Coming With Bg Image", type: "link" },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Miscellaneous",
    menucontent: "Bonus Pages & Apps",
    Items: [
      {
        title: "Gallery",
        icon: "gallery",
        id: 26,
        type: "sub",
        active: false,
        children: [
          { path: "/gallery/gallery_grids", title: "Gallery Grids", type: "link" },
          { path: "/gallery/gallery_grid_with_description", title: "Gallery Grid Desc", type: "link" },
          { path: "/gallery/masonry_gallery", title: "Masonry Gallery", type: "link" },
          { path: "/gallery/masonry_gallery_with_description", title: "Masonry With Desc", type: "link" },
          { path: "/gallery/hover_effect", title: "Hover Effect", type: "link" },
        ],
      },

      {
        title: "Blog",
        icon: "blog",
        id: 27,
        type: "sub",
        active: false,
        children: [
          { path: "/blog/blog_details", title: "Blog Details", type: "link" },
          { path: "/blog/blog_single", title: "Blog Single", type: "link" },
          { path: "/blog/add_post", title: "Add Post", type: "link" },
        ],
      },
      { path: "/miscellaneous/faq", icon: "faq", type: "link", active: false, title: "FAQ" },
      {
        title: "Job Search",
        icon: "job-search",
        id: 28,
        type: "sub",
        active: false,
        children: [
          { path: "/job_search/card_view", title: "Cards View", type: "link" },
          { path: "/job_search/list_view", title: "List View", type: "link" },
          { path: "/job_search/job_detail", title: "Job Detail", type: "link" },
          { path: "/job_search/apply", title: "Apply", type: "link" },
        ],
      },
      {
        title: "Learning",
        icon: "learning",
        id: 29,
        type: "sub",
        active: false,
        children: [
          { path: "/learning/learning_list", title: "Learning List", type: "link" },
          { path: "/learning/detail_course", title: "Detailed Course", type: "link" },
        ],
      },
      {
        title: "Map",
        icon: "maps",
        type: "sub",
        id: 30,
        active: false,
        children: [
          { path: "/map/google_map", type: "link", title: "Google Map" },
          { path: "/map/leaflet_map", type: "link", title: "Leaflet Map" },
        ],
      },
      {
        title: "Editor",
        id: 31,
        icon: "editors",
        type: "sub",
        active: false,
        children: [
          { path: "/editor/ck_editor", type: "link", title: "CK Editor" },
          { path: "/editor/mde_editor", type: "link", title: "MDE Editor" },
          { path: "/editor/ace_editor", type: "link", title: "ACE Editor" },
        ],
      },

      { id: 32, path: "/miscellaneous/knowledgebase", icon: "knowledgebase", type: "link", active: false, title: "Knowledgebase" },
      { id: 33, path: "/miscellaneous/support_ticket", icon: "support-tickets", type: "link", active: false, title: "SupportTicket" },
    ],
  },
];
