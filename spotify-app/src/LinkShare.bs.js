// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Cn = require("re-classnames/src/Cn.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Emotion = require("bs-emotion/src/Emotion.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var AppStyle$ReactTemplate = require("./AppStyle.bs.js");
var BsReactstrap__Dropdown = require("@ahrefs/bs-reactstrap/src/BsReactstrap__Dropdown.bs.js");
var BsReactstrap__DropdownItem = require("@ahrefs/bs-reactstrap/src/BsReactstrap__DropdownItem.bs.js");
var BsReactstrap__DropdownMenu = require("@ahrefs/bs-reactstrap/src/BsReactstrap__DropdownMenu.bs.js");
var BsReactstrap__DropdownToggle = require("@ahrefs/bs-reactstrap/src/BsReactstrap__DropdownToggle.bs.js");

var linkSharing = Emotion.css(undefined, /* :: */[
      Emotion.label("linkSharing"),
      /* :: */[
        Emotion.marginBottom(/* `px */[
              25096,
              64
            ]),
        /* [] */0
      ]
    ]);

var shareLinkURL = Emotion.css(undefined, /* :: */[
      Emotion.label("shareLinkURL"),
      /* :: */[
        Emotion.border(/* `px */[
              25096,
              0
            ], /* none */-922086728, /* `hex */[
              5194459,
              "ffffff"
            ]),
        /* :: */[
          Emotion.borderBottom(/* `px */[
                25096,
                1
              ], /* solid */12956715, /* `hex */[
                5194459,
                "cfcfcf"
              ]),
          /* :: */[
            Emotion.padding2(/* `px */[
                  25096,
                  0
                ], /* `px */[
                  25096,
                  8
                ]),
            /* :: */[
              Emotion.width(/* `px */[
                    25096,
                    280
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var subInfo = Emotion.css(undefined, /* :: */[
      Emotion.label("subInfo"),
      /* :: */[
        Emotion.fontSize(/* `px */[
              25096,
              14
            ]),
        /* :: */[
          Emotion.color(/* `hex */[
                5194459,
                "a2a2a2"
              ]),
          /* :: */[
            Emotion.padding2(/* `px */[
                  25096,
                  0
                ], /* `px */[
                  25096,
                  8
                ]),
            /* :: */[
              Emotion.select("#stop-btn", /* :: */[
                    Emotion.color(/* `hex */[
                          5194459,
                          "ff4e4e"
                        ]),
                    /* :: */[
                      Emotion.margin2(/* `px */[
                            25096,
                            0
                          ], /* `px */[
                            25096,
                            16
                          ]),
                      /* :: */[
                        Emotion.textDecoration(/* underline */131142924),
                        /* :: */[
                          Emotion.select(":hover", /* :: */[
                                Emotion.cursor(/* pointer */-786317123),
                                /* :: */[
                                  Emotion.color(Emotion.Css[/* Color */11][/* red */121]),
                                  /* [] */0
                                ]
                              ]),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var component = ReasonReact.reducerComponent("User");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", {
                          className: linkSharing
                        }, React.createElement("p", {
                              className: AppStyle$ReactTemplate.pageSubTitle
                            }, "Share the following link to invite people to your music"), React.createElement("div", {
                              style: {
                                margin: "auto",
                                width: "fit-content"
                              }
                            }, React.createElement("div", {
                                  className: AppStyle$ReactTemplate.flexWrapper(/* center */98248149, /* flexEnd */924268066)
                                }, React.createElement("input", {
                                      className: shareLinkURL,
                                      readOnly: true,
                                      value: "www.example.com/?userId"
                                    }), ReasonReact.element(undefined, undefined, BsReactstrap__Dropdown.make(undefined, undefined, undefined, undefined, self[/* state */1][/* isDropdownOpen */0], undefined, undefined, undefined, "sm", undefined, (function (param) {
                                            return Curry._1(self[/* send */3], /* Toggle */0);
                                          }), undefined, undefined, undefined, /* array */[
                                          ReasonReact.element(undefined, undefined, BsReactstrap__DropdownToggle.make(true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */["Share"])),
                                          ReasonReact.element(undefined, undefined, BsReactstrap__DropdownMenu.make(undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                    ReasonReact.element(undefined, undefined, BsReactstrap__DropdownItem.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */["Facebook"])),
                                                    ReasonReact.element(undefined, undefined, BsReactstrap__DropdownItem.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */["Twitter"])),
                                                    ReasonReact.element(undefined, undefined, BsReactstrap__DropdownItem.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */["Copy URL"]))
                                                  ]))
                                        ]))), React.createElement("div", {
                                  className: Cn.make(/* :: */[
                                        AppStyle$ReactTemplate.flexWrapper(/* flexStart */662439529, /* flexStart */662439529),
                                        /* :: */[
                                          subInfo,
                                          /* [] */0
                                        ]
                                      ])
                                }, React.createElement("p", undefined, React.createElement("i", undefined, "240 Listners")), React.createElement("a", {
                                      id: "stop-btn"
                                    }, "Stop Sharing"))));
            }),
          /* initialState */(function (param) {
              return /* record */[/* isDropdownOpen */false];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              return /* Update */Block.__(0, [/* record */[/* isDropdownOpen */!state[/* isDropdownOpen */0]]]);
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var Css = 0;

exports.Css = Css;
exports.linkSharing = linkSharing;
exports.shareLinkURL = shareLinkURL;
exports.subInfo = subInfo;
exports.component = component;
exports.make = make;
/* linkSharing Not a pure module */
