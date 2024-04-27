import Image from "next/image";
"use client"

// import { ChevronDownIcon } from "@radix-ui/react-icons"; 
import {
  Canvas,
  Editor,
  Element,
  Frame,
  useEditor,
  useNode,
} from "@craftjs/core";

// import { Layers } from "@craftjs/layers";
import React, { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
// import { Slider } from "@/components/ui/slider";
import {
  ImageMinus,
  Layers2,
  LucideArrowDownNarrowWide,
  Pen,
  RectangleHorizontal,
  RemoveFormatting,
  Square,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Layers } from "@craftjs/layers";
import Abc from "@/components/ui/abc";







// @ts-ignore
// components/user/Text.js
export const Text = ({
  children,
  fontSize,
  text,
  color,
  fontWeight,
  textAlign,
  marginRight,
  marginTop,
  marginLeft,
  marginBottom,
}: any) => {
  const {
    actions: { setProp },
  } = useNode((node) => ({
    font: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    textAlign: node.data.props.textAlign,
    color: node.data.props.background || "black",
    marginTop: node.data.props.marginTop | 0,
    marginBottom: node.data.props.marginBottom | 0,
    marginLeft: node.data.props.marginLeft | 0,
    marginRight: node.data.props.marginRight | 0,
  }));

  const {
    connectors: { connect, drag },
    isActive,
  } = useNode((node) => ({
    isActive: node.events.selected,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`w-full text-gray-900 ${
        isActive ? "border border-blue-500" : ""
      }`}
      style={{
        fontSize: fontSize,
        color: color || "black",
        fontWeight: fontWeight,
        textAlign: textAlign,
        marginTop: marginTop,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
      }}
    >
      {children}
 

      <h1 style={{ fontSize: fontSize }}>Welcome To My Next-js Craft Editor</h1>
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">
              Typography{" "}
              <span>
                {props.fontSize},{props.fontWeight},{props.textAlign}{" "}
              </span>
            </AccordionTrigger>
            <div>
              <AccordionContent>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-[#808080]">
                    Font size
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={props.fontSize || 7}
                    step={1}
                    onChange={(e) => {
                      setProp(
                        (props) => (props.fontSize = parseInt(e.target.value)),
                      );
                    }}
                    className="mt-1 block w-full"
                  />
                </div>
              </AccordionContent>
            </div>
            <div className="flex">
              <AccordionContent className=" p-2">
                <div>
                  <label className="block text-sm font-medium text-[#808080]">
                    Align
                  </label>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="">
                      <input
                        type="radio"
                        id="left"
                        name="textAlign"
                        value="left"
                        checked={props.textAlign === "left"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.textAlign = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="flexstart" className="mr-4">
                        Left
                      </label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="center"
                        name="textAlign"
                        value="center"
                        checked={props.textAlign === "center"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.textAlign = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">Center</label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="right"
                        name="textAlign"
                        value="right"
                        checked={props.textAlign === "right"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.textAlign = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">Right</label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
              <AccordionContent className=" p-2">
                <div>
                  <label className="block text-sm font-medium text-[#808080]">
                    Weight
                  </label>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="">
                      <input
                        type="radio"
                        id="regular"
                        name="fontWeight"
                        value="400"
                        checked={props.fontWeight === "regular"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.fontWeight = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="flexstart" className="mr-4">
                        Regular
                      </label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="medium"
                        name="fontWeight"
                        value="700"
                        checked={props.fontWeight === "medium"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.fontWeight = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">Medium</label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="bold"
                        name="fontWeight"
                        value="900"
                        checked={props.fontWeight === "bold"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.fontWeight = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">Bold</label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">
              Margin{" "}
              <span>
                {props.marginTop ?? "0"}px {props.marginRight ?? "0"}px{" "}
                {props.marginBottom ?? "0"}px {props.marginLeft ?? "0"}px
              </span>
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 p-2">
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Top
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginTop || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginTop = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Bottom
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginBottom || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.marginBottom = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Right
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginRight || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginRight = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Left
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginLeft || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginLeft = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-[#808080]">
          color
        </label>
        <div className="flex items-center gap-2 rounded-full border bg-[#efeff1] px-3">
          <input
            type="color"
            defaultValue={props.background || "#000"}
            onChange={(e) => {
              setProp((props) => (props.color = e.target.value));
            }}
            className=" mt-1 block  "
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
          />
          <span className="text-sm">{props.color}</span>
        </div>
      </div>
    </>
  );
};

Text.craft = {
  props: {
    text: " i am text",
    fontSize: "12",
    color: "black",
  },
  related: {
    settings: TextSettings,
    text: "text",
  },
};

export const ImageComp = ({
  image,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  width,
  height,
  paddingRight,
  paddingTop,
  paddingLeft,
  paddingBottom,
  objectFit,
  borderRadius,
}: any) => {
  const {
    connectors: { drag, connect },
  } = useNode();

  return (
    // @ts-ignore
    <div ref={(ref) => connect(drag(ref))}>
      <img
        style={{
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          marginBottom: marginBottom,
          paddingRight: paddingRight,
          paddingTop: paddingTop,
          paddingLeft: paddingLeft,
          paddingBottom: paddingBottom,
          objectFit: objectFit,

          borderRadius: borderRadius,
        }}
        src={image}
        width={width ?? 300}
        height={height ?? 300}
      />
    </div>
  );
};
const ImageSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="p-1">
              <span>Dimensions</span>
              {props.width ?? "300"}px x {props.height ?? "300"}px
            </AccordionTrigger>

            <AccordionContent>
              <div className="mt-2 flex items-center  justify-center gap-2">
                <div className="mb-4 flex flex-col ">
                  <label className="block text-sm font-bold text-[#808080]">
                    Width
                  </label>
                  <input
                    type="text"
                    min={0}
                    defaultValue={props.width || 300}
                    maxLength={3}
                    onChange={(e) => {
                      setProp(
                        (props) => (props.width = parseInt(e.target.value)),
                      );
                    }}
                    className="mt-1 block w-[70%] rounded-full border-none bg-[#efeff1] p-1 text-center shadow-sm outline-none focus:ring-0"
                  />
                </div>
                <div className="mb-4 flex flex-col ">
                  <label className="block  text-sm font-bold text-[#808080]">
                    Height
                  </label>
                  <input
                    type="text"
                    min={0}
                    defaultValue={props.height || 300}
                    onChange={(e) => {
                      setProp((props) => (props.height = e.target.value));
                    }}
                    className="mt-1 block w-[70%] rounded-full border-none bg-[#efeff1] p-1 text-center shadow-sm outline-none focus:ring-0"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">
              Margin{" "}
              <span>
                {props.marginTop ?? "0"}px {props.marginRight ?? "0"}px{" "}
                {props.marginBottom ?? "0"}px {props.marginLeft ?? "0"}px
              </span>
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 p-2">
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Top
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginTop || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginTop = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Bottom
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginBottom || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.marginBottom = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Right
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginRight || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginRight = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Left
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginLeft || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginLeft = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">
              Padding{" "}
              <span>
                {props.marginTop ?? "0"}px {props.marginRight ?? "0"}px{" "}
                {props.marginBottom ?? "0"}px {props.marginLeft ?? "0"}px
              </span>
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 p-2">
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Top
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.paddingTop || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.paddingTop = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Bottom
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.paddingBottom || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.paddingBottom = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Right
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.paddingRight || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.paddingRight = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Left
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.paddingLeft || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.paddingLeft = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-0">Decoration</AccordionTrigger>
            <AccordionContent className="p-2">
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium text-[#808080]">
                  Border Radius
                </label>
                <input
                  type="range"
                  min={0}
                  max={200}
                  defaultValue={props.borderRadius || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.borderRadius = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">Alignment</AccordionTrigger>
            <div className="flex">
              <AccordionContent className=" p-2">
                <div>
                  <label className="block text-sm font-medium text-[#808080]">
                    objectFit
                  </label>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className=" ">
                      <input
                        type="radio"
                        id="objectFit"
                        name="objectFit"
                        value="contain"
                        checked={props.objectFit === "contain"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.objectFit = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="Contain" className="mr-4">
                        Contain
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="objectFit"
                        name="objectFit"
                        value="cover"
                        checked={props.objectFit === "cover"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.objectFit = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="Cover">Cover</label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
              <AccordionContent className=" p-2">
                <div>
                  <label className="block text-sm font-medium text-[#808080]">
                    Fill space
                  </label>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className=" ">
                      <input
                        id="yes"
                        type="radio"
                        value="yes"
                        className="mr-1"
                      />
                      <label htmlFor="flexDirectionRow" className="mr-4">
                        Yes
                      </label>
                    </div>
                    <div>
                      <input
                        id="no"
                        type="radio"
                        value=" No"
                        className="mr-1"
                      />
                      <label htmlFor="flexDirectionColumn">No</label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </div>
            <div className="flex">
              {/* <AccordionContent className=" p-2">
                <div>
                  <label className="block text-sm font-medium text-[#808080]">
                    Align Items
                  </label>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="">
                      <input
                        type="radio"
                        id="flexs-tart"
                        name="alignItems"
                        value="flex-start"
                        checked={alignItems === "flex-start"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.alignItems = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="flexstart" className="mr-4">
                        Flex Start
                      </label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="center"
                        name="alignItems"
                        value="center"
                        checked={alignItems === "center"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.alignItems = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">Center</label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="lex-end"
                        name="alignItems"
                        value="flex-end"
                        checked={alignItems === "flex-end"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.alignItems = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">flex End</label>
                    </div>
                  </div>
                </div>
              </AccordionContent> */}
              {/* <AccordionContent className=" p-2">
                <div>
                  <label className="block text-sm font-medium text-[#808080]">
                    Justify Content
                  </label>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="">
                      <input
                        type="radio"
                        id="flex-start"
                        name="justifyContent"
                        value="flex-start"
                        checked={justifyContent === "flex-start"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.justifyContent = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="flexstart" className="mr-4">
                        Flex Start
                      </label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="center"
                        name="justifyContent"
                        value="center"
                        checked={justifyContent === "center"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.justifyContent = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">Center</label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="lex-end"
                        name="justifyContent"
                        value="flex-end"
                        checked={justifyContent === "flex-end"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.justifyContent = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">flex End</label>
                    </div>
                  </div>
                </div>
              </AccordionContent> */}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
ImageComp.craft = {
  props: {
    image: "https://avatars.githubusercontent.com/u/112826965?v=4",
    width: "100",
    height: "100",
  },
  related: {
    settings: ImageSettings,
  },
};
// @ts-ignore
const Container = ({ children }) => {
  const {
    background,
    width,
    height,
    borderRadius,
    boxShadow,
    paddingRight,
    paddingTop,
    paddingLeft,
    paddingBottom,
    marginRight,
    marginTop,
    marginLeft,
    marginBottom,
    flexDirection,
    alignItems,
    justifyContent,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    paddingTop: node.data.props.paddingTop | 0,
    paddingBottom: node.data.props.paddingBottom | 0,
    paddingLeft: node.data.props.paddingLeft | 0,
    paddingRight: node.data.props.paddingRight | 0,
    marginTop: node.data.props.marginTop | 0,
    marginBottom: node.data.props.marginBottom | 0,
    marginLeft: node.data.props.marginLeft | 0,
    marginRight: node.data.props.marginRight | 0,
    width: node.data.props.width,
    height: node.data.props.height,
    borderRadius: node.data.props.borderRadius,
    boxShadow: node.data.props.boxShadow,
    flexDirection: node.data.props.flexDirection,
    alignItems: node.data.props.alignItems,
    justifyContent: node.data.props.justifyContent,
  }));

  const {
    connectors: { drag, connect },
  } = useNode();

  // @ts-ignore
  return (
    <div
      id="drop_section"
      className=" flex gap-1 border-black "
      ref={(ref) => connect(drag(ref))}
      style={{
        background: background || "grey",
        paddingRight: `${paddingRight}px`,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft:` ${paddingLeft}px`,
        marginRight: `${marginRight}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        width: width ? `${width}px` : "300px",
        height: height ? `${height}px` : "300px",
        borderRadius: borderRadius ? `${borderRadius}px` : "0px",
        flexDirection: flexDirection || "column",
        alignItems: alignItems || "flex-start",
        justifyContent: justifyContent || "flex-start",
        boxShadow: boxShadow
          ? `${boxShadow.offsetX}px ${boxShadow.offsetY}px ${boxShadow.blurRadius}px ${boxShadow.spreadRadius}px ${boxShadow.color}`
          : "none",
      }}
    >
      {children}
    </div>
  );
};



const ContainerSettings = () => {
  const {
    background,
    paddingRight,
    paddingTop,
    paddingLeft,
    paddingBottom,
    width,
    height,
    borderRadius,
    boxShadow,
    flexDirection,
    alignItems,
    justifyContent,
    marginRight,
    marginTop,
    marginLeft,
    marginBottom,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    paddingTop: node.data.props.paddingTop | 0,
    paddingBottom: node.data.props.paddingBottom | 0,
    paddingLeft: node.data.props.paddingLeft | 0,
    paddingRight: node.data.props.paddingRight | 0,
    marginTop: node.data.props.marginTop | 0,
    marginBottom: node.data.props.marginBottom | 0,
    marginLeft: node.data.props.marginLeft | 0,
    marginRight: node.data.props.marginRight | 0,
    height: node.data.props.height,
    width: node.data.props.width,
    borderRadius: node.data.props.borderRadius || 0,
    flexDirection: node.data.props.flexDirection || "column",
    alignItems: node.data.props.alignItems || "flex-start",
    justifyContent: node.data.props.justifyContent || "flex-start",
    boxShadow: node.data.props.boxShadow || {
      offsetX: 0,
      offsetY: 0,
      blurRadius: 0,
      spreadRadius: 0,
      color: "rgba(0,0,0,0.5)",
    },
  }));

  return (
    <div>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-0">Color</AccordionTrigger>
            <AccordionContent className="p-2">
              <label className="mb-2 block text-sm font-medium text-[#808080]">
                Background
              </label>
              <div className="flex items-center gap-2 rounded-full border bg-[#efeff1] px-3">
                <input
                  type="color"
                  defaultValue={background || "#000"}
                  onChange={(e) => {
                    setProp((props) => (props.background = e.target.value));
                  }}
                  className=" mt-1 block  "
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
                <span className="text-sm">{background}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="p-1">
              <span>Dimensions</span>
              {width ?? "300"}px x {height ?? "300"}px
            </AccordionTrigger>

            <AccordionContent>
              <div className="mt-2 flex items-center  justify-center gap-2">
                <div className="mb-4 flex flex-col ">
                  <label className="block text-sm font-bold text-[#808080]">
                    Width
                  </label>
                  <input
                    type="text"
                    min={0}
                    defaultValue={width || 300}
                    maxLength={3}
                    onChange={(e) => {
                      setProp(
                        (props) => (props.width = parseInt(e.target.value)),
                      );
                    }}
                    className="mt-1 block w-[70%] rounded-full border-none bg-[#efeff1] p-1 text-center shadow-sm outline-none focus:ring-0"
                  />
                </div>
                <div className="mb-4 flex flex-col ">
                  <label className="block  text-sm font-bold text-[#808080]">
                    Height
                  </label>
                  <input
                    type="text"
                    min={0}
                    defaultValue={height || 300}
                    onChange={(e) => {
                      setProp((props) => (props.height = e.target.value));
                    }}
                    className="mt-1 block w-[70%] rounded-full border-none bg-[#efeff1] p-1 text-center shadow-sm outline-none focus:ring-0"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">
              Margin{" "}
              <span>
                {marginTop ?? "0"}px {marginRight ?? "0"}px{" "}
                {marginBottom ?? "0"}px {marginLeft ?? "0"}px
              </span>
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 p-2">
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Top
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={marginTop || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginTop = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Bottom
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={marginBottom || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.marginBottom = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Right
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={marginRight || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginRight = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Left
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={marginLeft || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginLeft = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">
              Padding{" "}
              <span>
                {paddingTop ?? "0"}px {paddingRight ?? "0"}px{" "}
                {paddingBottom ?? "0"}px {paddingLeft ?? "0"}px
              </span>
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 p-2">
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Top
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={paddingTop || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.paddingTop = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Bottom
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={paddingBottom || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.paddingBottom = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Right
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={paddingRight || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.paddingRight = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Left
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={paddingLeft || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.paddingLeft = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-0">Decoration</AccordionTrigger>
            <AccordionContent className="p-2">
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium text-[#808080]">
                  Border Radius
                </label>
                <input
                  type="range"
                  min={0}
                  max={200}
                  defaultValue={borderRadius || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.borderRadius = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
            <AccordionContent className="p-2">
              <div className="mb-4 w-full">
                <label className="block text-sm font-medium text-[#808080]">
                  Shadow
                </label>
                <input
                  type="range"
                  min={0}
                  max={5}
                  defaultValue={boxShadow.offsetX} // Make sure shadow.offsetX is the correct value
                  onChange={(e) => {
                    setProp((props) => ({
                      boxShadow: {
                        ...(props.boxShadow = {
                          offsetX: parseInt(e.target.value),
                          offsetY: parseInt(e.target.value),
                          blurRadius: parseInt(e.target.value),
                          spreadRadius: parseInt(e.target.value),
                          color: "rgba(0,0,0,0.5)",
                        }),
                      },
                    }));
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">Alignment</AccordionTrigger>
            <div className="flex">
              <AccordionContent className=" p-2">
                <div>
                  <label className="block text-sm font-medium text-[#808080]">
                    Flex Direction
                  </label>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className=" ">
                      <input
                        type="radio"
                        id="flexDirectionRow"
                        name="flexDirection"
                        value="row"
                        checked={flexDirection === "row"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.flexDirection = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="flexDirectionRow" className="mr-4">
                        Row
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="flexDirectionColumn"
                        name="flexDirection"
                        value="column"
                        checked={flexDirection === "column"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.flexDirection = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="flexDirectionColumn">Column</label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
              <AccordionContent className=" p-2">
                <div>
                  <label className="block text-sm font-medium text-[#808080]">
                    Fill space
                  </label>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className=" ">
                      <input
                        id="yes"
                        type="radio"
                        value="yes"
                        className="mr-1"
                      />
                      <label htmlFor="flexDirectionRow" className="mr-4">
                        Yes
                      </label>
                    </div>
                    <div>
                      <input
                        id="no"
                        type="radio"
                        value=" No"
                        className="mr-1"
                      />
                      <label htmlFor="flexDirectionColumn">No</label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </div>
            <div className="flex">
              <AccordionContent className=" p-2">
                <div>
                  <label className="block text-sm font-medium text-[#808080]">
                    Align Items
                  </label>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="">
                      <input
                        type="radio"
                        id="flexs-tart"
                        name="alignItems"
                        value="flex-start"
                        checked={alignItems === "flex-start"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.alignItems = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="flexstart" className="mr-4">
                        Flex Start
                      </label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="center"
                        name="alignItems"
                        value="center"
                        checked={alignItems === "center"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.alignItems = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">Center</label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="lex-end"
                        name="alignItems"
                        value="flex-end"
                        checked={alignItems === "flex-end"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.alignItems = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">flex End</label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
              <AccordionContent className=" p-2">
                <div>
                  <label className="block text-sm font-medium text-[#808080]">
                    Justify Content
                  </label>
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="">
                      <input
                        type="radio"
                        id="flex-start"
                        name="justifyContent"
                        value="flex-start"
                        checked={justifyContent === "flex-start"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.justifyContent = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="flexstart" className="mr-4">
                        Flex Start
                      </label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="center"
                        name="justifyContent"
                        value="center"
                        checked={justifyContent === "center"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.justifyContent = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">Center</label>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <div>
                      <input
                        type="radio"
                        id="lex-end"
                        name="justifyContent"
                        value="flex-end"
                        checked={justifyContent === "flex-end"}
                        onChange={(e) => {
                          setProp(
                            (props) => (props.justifyContent = e.target.value),
                          );
                        }}
                        className="mr-1"
                      />
                      <label htmlFor="center">flex End</label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export const Buttons = ({
  children,
  border,
  borderRadius,
  padding,
  background,
  text,
  fontSize,
  color,
  paddingRight,
  paddingTop,
  paddingLeft,
  paddingBottom,
  marginRight,
  marginTop,
  marginLeft,
  marginBottom,
}: any) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <button
      ref={(ref) => connect(drag(ref))}
      className="h-max w-full rounded px-4 py-2"
      style={{
        background: background,
        borderRadius: borderRadius,
        fontSize: fontSize || "10px",
        color: color || "white",
        paddingRight: `${paddingRight}px`,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`,
        marginRight: `${marginRight}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
      }}
    >
 
      <h1>Click me</h1>
      {children}
    </button>
  );
};
const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <div className="mb-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">
              Color{" "}
              <span
                className="rounded-full px-2 py-1"
                style={{
                  background: props.background ?? "black",
                  color: props.color ?? "white",
                }}
              >
                T
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#808080]">
                  Background
                </label>
                <div className="flex items-center gap-2 rounded-full border bg-[#efeff1] px-3">
                  <input
                    type="color"
                    defaultValue={props.background || ""}
                    onChange={(e) => {
                      setProp((props) => (props.background = e.target.value));
                    }}
                    className=" mt-1 block  "
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                  <span className="text-sm">{props.background}</span>
                </div>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#808080]">
                  TextColor
                </label>
                <div className="flex items-center gap-2 rounded-full border bg-[#efeff1] px-3">
                  <input
                    type="color"
                    defaultValue={props.color || "black"}
                    onChange={(e) => {
                      setProp((props) => (props.color = e.target.value));
                    }}
                    className=" mt-1 block  "
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                  <span className="text-sm">{props.color}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">
              Margin{" "}
              <span>
                {props.marginTop ?? "0"}px {props.marginRight ?? "0"}px{" "}
                {props.marginBottom ?? "0"}px {props.marginLeft ?? "0"}px
              </span>
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 p-2">
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Top
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginTop || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginTop = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Bottom
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginBottom || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.marginBottom = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Right
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginRight || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginRight = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Left
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.marginLeft || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.marginLeft = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">
              Padding{" "}
              <span>
                {props.paddingTop ?? "0"}px {props.paddingRight ?? "0"}px{" "}
                {props.paddingBottom ?? "0"}px {props.paddingLeft ?? "0"}px
              </span>
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 p-2">
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Top
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.paddingTop || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.paddingTop = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Bottom
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.paddingBottom || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.paddingBottom = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Right
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.paddingRight || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.paddingRight = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  Left
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={props.paddingLeft || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.paddingLeft = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-0">
              Decoration
              {/* <ChevronDownIcon className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" /> */}
            </AccordionTrigger>
            <AccordionContent>
              <div className=" w-full">
                <label className="block text-sm font-medium text-[#808080]">
                  Border Radius
                </label>
                <input
                  type="range"
                  min={0}
                  max={50}
                  defaultValue={props.borderRadius || 0}
                  onChange={(e) => {
                    setProp(
                      (props) =>
                        (props.borderRadius = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
            <AccordionContent>
              <div>
                <label className="block text-sm font-medium text-[#808080]">
                  fontSize
                </label>
                <input
                  type="range"
                  min={10}
                  max={100}
                  defaultValue={props.fontSize || 0}
                  onChange={(e) => {
                    setProp(
                      (props) => (props.fontSize = parseInt(e.target.value)),
                    );
                  }}
                  className="mt-1 block w-full"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* <div>
        <label className="block text-sm font-medium">Variant</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={props.variant}
          onChange={(e) => setProp((props) => (props.variant = e.target.value))}
        >
          <option value="text">Text</option>
          <option value="primary">primary</option>
          <option value="Secondary">Secondary</option>
        </select>
      </div>
      */}
    </div>
  );
};



Buttons.craft = {
  props: {
    background: "black",
    color: "white",
    text: "Click me",
    borderRadius: "0",
    fontSize: "10px",
  },
  related: {
    settings: ButtonSettings,
  },
};

Container.craft = {
  related: {
    settings: ContainerSettings,
  },
};
const Toolbox = () => {
  const { connectors } = useEditor();

  const { currentlySelectedId } = useEditor((state) => {
    const [currentlySelectedId] = state.events.selected;
    return {
      currentlySelectedId,
    };
  });

  return (
    <div className="flex flex-col flex-wrap gap-4 p-1">
      {/* <h1 className="w-full rounded-lg border border-slate-400 p-2 text-center">
        Toolbox
      </h1> */}
      <Button
        variant="secondary"
        className="p-2"
        ref={(ref) => {
          // @ts-ignore
          connectors.create(ref, <Element canvas is={Text} id="asasa" />);
        }}
      >
        <RemoveFormatting width={12} />
      </Button>
      <Button
        variant="secondary"
        className="p-2"
        // @ts-ignore
        ref={(ref) =>
          connectors.create(ref, <Element id={"abc"} canvas is={Container} />)
        }
      >
        <Square width={12} />
      </Button>
      <Button
        variant="secondary"
        className="p-2"
        // @ts-ignore
        ref={(ref) =>
          connectors.create(ref, <Element id={"efg"} canvas is={ImageComp} />)
        }
      >
        <ImageMinus width={12} />
      </Button>
      <Button
        className="p-2"
        variant="secondary"
        // @ts-ignore
        ref={(ref) =>
          connectors.create(ref, <Element id={"hij"} canvas is={Buttons} />)
        }
      >
        <RectangleHorizontal width={18} fill="grey" height={12} className="" />
      </Button>
    </div>
  );
};

const ViewPort = () => {
  const { enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
  return (
    <div className="flex justify-center">
      <Button
        className="mr-5 "
        onClick={() => {
          actions.history.undo();
        }}
      >
        Undo
      </Button>
      <Button
        onClick={() => {
          actions.history.redo();
        }}
      >
        Redo
      </Button>
    </div>
  );
};

const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selected;
    // console.log("currentNodeId", state.nodes[currentNodeId].data.name);

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  return selected ? (
    <div className="mt-2 bg-white px-2 py-2">
      <div className="space-y-2">
        <div className="pb-2">
          <div className="flex items-center">
            <div className="flex-grow">
              <p className="text-sm font-medium">Selected</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-blue-500 px-2 py-0.5 text-sm font-medium text-white">
              {selected?.name ?? "Selected"}
            </span>
          </div>
        </div>

        <div>{selected.settings && React.createElement(selected.settings)}</div>
        {selected?.isDeletable ? (
          <button
            onClick={() => {
              actions.delete(selected.id);
            }}
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  ) : null;
};


export default function LandingPageTemplateEditor({
  program,
  data,
  brand,
}:any) {
  return (
    <div className="block overflow-hidden rounded-lg border border-stone-100 bg-white text-black shadow-sm">
      <Editor
        resolver={{
          Container,
          ImageComp,
          Buttons,
          Text,
          Abc,
        }}
      >
        <div className="flex flex-row">
          <div className="w-[80%] relative border-2">
            <Frame>
              <Element is="App" id="abdddk" canvas>
               <Abc/>
              </Element>
            </Frame>
          </div>
          <div className="flex h-screen w-[60%]  overflow-scroll border ">
            <div>
              <Toolbox />
            </div>
            <div className="relative  flex w-full flex-col  border ">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="p-0">
                    {" "}
                    <span className="flex items-center gap-2  p-2">
                      <Pen color="#808080" width={18} fill="#808080" />
                      <h1 className="font-normal">Coustomize</h1>
                    </span>
                    {/* <ChevronDownIcon className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" /> */}
                  </AccordionTrigger>
                  <AccordionContent>
                    <SettingsPanel />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="p-0">
                      {" "}
                      <span className="flex items-center gap-2  p-2">
                        <Layers2 color="#808080" width={18} fill="#808080" />
                        <h1 className=" font-normal">Layers</h1>
                      </span>
                      {/* <ChevronDownIcon className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" /> */}
                    </AccordionTrigger>
                    <AccordionContent>
                      <Layers />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="mt-2">
                <ViewPort />
              </div>
            </div>
          </div>
        </div>
      </Editor>
    </div>
  );
}