require(['config'], function() {
    require([
        '$',
        'dustjs-component',
        'text',
        'text!tests.dust',
        'plugin',
        'velocity',
        'bellows',
        'pinny',
        'sheet-left',
        'shade',
        'lockup',
        'deckard',
        'bouncefix',
        'stencil-spec/spec.template',
        'stencil-input-inline-btn/input-inline-btn.template',
        '../../main-menu.template'
    ],
    function($, dust, text, tests) {
        // Define any context required for the tests:
        var context = {
            repo: 'https://github.com/mobify/stencil-main-menu',
            menuItems: [
                {
                    "label": "Airing Now",
                    "href": "http://www.jtv.com/broadcast",
                    "items": [
                        {
                            "label": "Watch Us Live",
                            "href": "http://www.jtv.com/on/demandware.store/Sites-jtv-Site/default/LiveViewer-Show"
                        },
                        {
                            "label": "Recent Items",
                            "href": "http://www.jtv.com/broadcast"
                        },
                        {
                            "label": "Weekly Product Recap",
                            "href": "http://www.jtv.com/on/demandware.store/Sites-jtv-Site/default/ProgramGuide-Archive"
                        },
                        {
                            "label": "Program Guide",
                            "href": "http://www.jtv.com/on/demandware.store/Sites-jtv-Site/default/ProgramGuide-Show"
                        },
                        {
                            "label": "Channel Finder",
                            "href": "http://www.jtv.com/on/demandware.store/Sites-jtv-Site/default/ChannelFinder-Show"
                        },
                        {
                            "label": "Meet Our Hosts",
                            "href": "http://www.jtv.com/linkpage?cid=meet-our-hosts"
                        }
                    ]
                },
                {
                    "label": "Jewelry",
                    "href":"http://www.jtv.com/jewelry",
                    "items": [
                        {
                            "label": "Shop by Type",
                            "href": "http://www.jtv.com/jewelry",
                            "items": [
                                {
                                    "label": "Rings",
                                    "href": "http://www.jtv.com/jewelry-rings",
                                    "items": [
                                        {
                                          "label": "Rings",
                                          "href": "http://www.jtv.com/jewelry-rings"
                                        },
                                        {
                                          "label": "Earrings",
                                          "href": "http://www.jtv.com/jewelry-earrings"
                                        },
                                        {
                                          "label": "Bracelets",
                                          "href": "http://www.jtv.com/jewelry-bracelets"
                                        },
                                        {
                                          "label": "Pendants",
                                          "href": "http://www.jtv.com/jewelry-pendants"
                                        },
                                        {
                                          "label": "Necklaces",
                                          "href": "http://www.jtv.com/jewelry-necklaces"
                                        },
                                        {
                                          "label": "Watches",
                                          "href": "http://www.jtv.com/jewelry-watches"
                                        },
                                        {
                                          "label": "Jewelry Sets",
                                          "href": "http://www.jtv.com/jewelry-jewelry-sets"
                                        },
                                        {
                                          "label": "Gemstone Settings",
                                          "href": "http://www.jtv.com/gemstones/gemstone-settings/settings"
                                        },
                                        {
                                          "label": "New Jewelry",
                                          "href": "http://www.jtv.com/shop/specialty/new-arrivals/new_arrivals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry"
                                        },
                                        {
                                          "label": "Jewelry Sale",
                                          "href": "http://www.jtv.com/shop/jtv-deals/jtv_deals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry"
                                        },
                                        {
                                          "label": "All Jewelry",
                                          "href": "http://www.jtv.com/jewelry?showProducts=1"
                                        }
                                    ]
                                },
                                {
                                    "label": "Earrings",
                                    "href": "http://www.jtv.com/jewelry-earrings"
                                },
                                {
                                    "label": "Bracelets",
                                    "href": "http://www.jtv.com/jewelry-bracelets"
                                },
                                {
                                    "label": "Pendants",
                                    "href": "http://www.jtv.com/jewelry-pendants"
                                },
                                {
                                    "label": "Necklaces",
                                    "href": "http://www.jtv.com/jewelry-necklaces"
                                },
                                {
                                    "label": "Watches",
                                    "href": "http://www.jtv.com/jewelry-watches"
                                },
                                {
                                    "label": "Jewelry Sets",
                                    "href": "http://www.jtv.com/jewelry-jewelry-sets"
                                },
                                {
                                    "label": "Gemstone Settings",
                                    "href": "http://www.jtv.com/gemstones/gemstone-settings/settings"
                                },
                                {
                                    "label": "New Jewelry",
                                    "href": "http://www.jtv.com/shop/specialty/new-arrivals/new_arrivals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry"
                                },
                                {
                                    "label": "Jewelry Sale",
                                    "href": "http://www.jtv.com/shop/jtv-deals/jtv_deals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry"
                                },
                                {
                                    "label": "All Jewelry",
                                    "href": "http://www.jtv.com/jewelry?showProducts=1"
                                }
                            ]
                        },
                        {
                            "label": "Shop by Gemstone",
                            "href": "http://www.jtv.com/jewelry",
                            "items": [
                                {
                                    "label": "Rings",
                                    "href": "http://www.jtv.com/jewelry-rings"
                                },
                                {
                                    "label": "Earrings",
                                    "href": "http://www.jtv.com/jewelry-earrings"
                                },
                                {
                                    "label": "Bracelets",
                                    "href": "http://www.jtv.com/jewelry-bracelets"
                                },
                                {
                                    "label": "Pendants",
                                    "href": "http://www.jtv.com/jewelry-pendants"
                                },
                                {
                                    "label": "Necklaces",
                                    "href": "http://www.jtv.com/jewelry-necklaces"
                                },
                                {
                                    "label": "Watches",
                                    "href": "http://www.jtv.com/jewelry-watches"
                                },
                                {
                                    "label": "Jewelry Sets",
                                    "href": "http://www.jtv.com/jewelry-jewelry-sets"
                                },
                                {
                                    "label": "Gemstone Settings",
                                    "href": "http://www.jtv.com/gemstones/gemstone-settings/settings"
                                },
                                {
                                    "label": "New Jewelry",
                                    "href": "http://www.jtv.com/shop/specialty/new-arrivals/new_arrivals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry"
                                },
                                {
                                    "label": "Jewelry Sale",
                                    "href": "http://www.jtv.com/shop/jtv-deals/jtv_deals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry"
                                },
                                {
                                    "label": "All Jewelry",
                                    "href": "http://www.jtv.com/jewelry?showProducts=1"
                                }
                            ]
                        },
                        {
                            "label": "Specialty Stores",
                            "href": "http://www.jtv.com/jewelry",
                            "items": [
                                {
                                    "label": "Rings",
                                    "href": "http://www.jtv.com/jewelry-rings"
                                },
                                {
                                    "label": "Earrings",
                                    "href": "http://www.jtv.com/jewelry-earrings"
                                },
                                {
                                    "label": "Bracelets",
                                    "href": "http://www.jtv.com/jewelry-bracelets"
                                },
                                {
                                    "label": "Pendants",
                                    "href": "http://www.jtv.com/jewelry-pendants"
                                },
                                {
                                    "label": "Necklaces",
                                    "href": "http://www.jtv.com/jewelry-necklaces"
                                },
                                {
                                    "label": "Watches",
                                    "href": "http://www.jtv.com/jewelry-watches"
                                },
                                {
                                    "label": "Jewelry Sets",
                                    "href": "http://www.jtv.com/jewelry-jewelry-sets"
                                },
                                {
                                    "label": "Gemstone Settings",
                                    "href": "http://www.jtv.com/gemstones/gemstone-settings/settings"
                                },
                                {
                                    "label": "New Jewelry",
                                    "href": "http://www.jtv.com/shop/specialty/new-arrivals/new_arrivals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry"
                                },
                                {
                                    "label": "Jewelry Sale",
                                    "href": "http://www.jtv.com/shop/jtv-deals/jtv_deals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry"
                                },
                                {
                                    "label": "All Jewelry",
                                    "href": "http://www.jtv.com/jewelry?showProducts=1"
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        // Render
        dust.renderSource(tests, context, function(err, out) {
            if (!err) {
                $('body').html(out);

                $('button').on('click', function(e) {
                    console.log('toggling');
                    $('.c-main-menu').pinny('toggle');
                });
            } else {
                console.log(err);
            }
        });
    });
});
