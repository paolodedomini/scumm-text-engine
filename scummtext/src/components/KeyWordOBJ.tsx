import { createEffect, createSignal, onMount, Show } from "solid-js";
import type { Ref } from "solid-js";
import style from "./KeyWordOVJ.module.scss";

export default function KeyWordOBJ(props: {
  children: string;
  option: { id: string };
}) {
  const [open, setOpen] = createSignal(false);
  const [getWidth, setWidth] = createSignal();
  //variabile che legge la ref
  let getRef: Ref<Element> | void;

  function keywordRef(el: Ref<Element>) {
    getRef = el;
  }

  createEffect(() => {
    setWidth(() => getRef.offsetWidth);
  });

  return (
    <span
      class={`${style.keywordTxt} ${open() && style.open}`}
      onclick={() => {
        setOpen(true);
      }}
      ref={(el) => keywordRef(el)}
    >
      {props.children}

      {open() && svgUnderline(getWidth())}
    </span>
  );
}

function svgUnderline(width: number) {
  return (
    <div class={style.underline}>
      <svg
        height="100%"
        width="130%"
        viewBox="0 0 130 100"
        preserveAspectRatio="none"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
        class={style.svgContent}
      >
        <g transform="matrix(1,0,0,1,-60,-1181)">
          <g transform="matrix(0.971449,0,0,5.50217,3.19077,-5445.35)">
            <rect
              id="Artboard2"
              x="59.441"
              y="1204.46"
              width="97.897"
              height="4.934"
              style="fill:none;"
            />
            <clipPath id="_clip1">
              <rect
                id="Artboard21"
                serif:id="Artboard2"
                x="59.441"
                y="1204.46"
                width="97.897"
                height="4.934"
              />
            </clipPath>
            <g clip-path="url(#_clip1)">
              <g transform="matrix(0.993286,0,0,0.175372,0.632053,997.295)">
                <path d="M110.303,1181.93L110.87,1181.9C111.695,1181.87 112.502,1181.75 113.329,1181.69C113.712,1181.66 114.098,1181.65 114.49,1181.66C115.886,1181.71 117.284,1181.82 118.682,1181.98C120.746,1182.2 122.804,1182.53 124.846,1182.81C126.65,1183.08 128.518,1183.37 130.38,1183.59C131.602,1183.73 132.821,1183.85 134.018,1183.9C138.265,1184.09 142.676,1184.24 146.543,1185.59C149.31,1186.55 151.806,1188.11 153.816,1190.66C155.024,1192.2 155.924,1193.62 156.451,1195.15C157.004,1196.75 157.157,1198.47 156.787,1200.56C156.686,1201.13 156.614,1201.85 156.448,1202.48C156.346,1202.87 156.208,1203.24 156.034,1203.56C155.799,1203.98 155.465,1204.43 155.082,1204.85C154.563,1205.43 153.952,1205.96 153.427,1206.34C152.873,1206.74 152.396,1207.4 151.835,1207.88C151.43,1208.22 150.993,1208.49 150.519,1208.66C149.049,1209.19 147.499,1209.48 145.911,1209.64C142.537,1209.99 138.978,1209.71 135.707,1209.96C134.251,1210.07 132.795,1210.11 131.338,1210.11C128.044,1210.13 124.748,1209.97 121.448,1210.11C118.638,1210.23 115.787,1210.29 112.938,1210.27C110.083,1210.26 107.229,1210.16 104.418,1209.99C102.835,1209.88 101.229,1209.86 99.62,1209.87C97.175,1209.89 94.72,1210.01 92.315,1210.12C91.252,1210.17 90.19,1210.17 89.128,1210.14C86.744,1210.09 84.365,1209.89 81.98,1209.89C81.486,1209.89 80.993,1209.86 80.501,1209.81C79.48,1209.72 78.464,1209.55 77.439,1209.49C73.712,1209.29 69.643,1209.47 66.366,1208.14C63.974,1207.17 61.953,1205.47 60.686,1202.39C60.179,1201.16 59.984,1199.97 60.007,1198.78C60.029,1197.64 60.247,1196.51 60.582,1195.34C60.918,1194.17 61.414,1192.65 62.093,1191.32C62.622,1190.29 63.265,1189.37 64.006,1188.74C64.689,1188.16 65.492,1187.71 66.348,1187.34C67.453,1186.86 68.648,1186.51 69.713,1186.12C71.509,1185.45 73.328,1185 75.166,1184.63C77.824,1184.11 80.519,1183.78 83.226,1183.26C84.427,1183.03 85.637,1182.87 86.851,1182.76C88.049,1182.64 89.25,1182.57 90.45,1182.52C91.287,1182.48 92.123,1182.43 92.96,1182.37C94.935,1182.22 96.909,1182.02 98.882,1181.86C100.396,1181.74 101.885,1181.7 103.371,1181.71C105.569,1181.72 107.757,1181.82 110.005,1181.87C110.11,1181.87 110.211,1181.89 110.303,1181.93ZM109.788,1183.51C109.59,1183.64 109.334,1183.68 109.094,1183.6C109.022,1183.57 108.798,1183.51 108.651,1183.44C106.883,1183.46 105.144,1183.47 103.401,1183.53C101.968,1183.58 100.535,1183.68 99.081,1183.85C97.394,1184.05 95.708,1184.29 94.02,1184.49C92.879,1184.62 91.737,1184.74 90.594,1184.84C89.203,1184.94 87.812,1185.08 86.43,1185.27C85.522,1185.39 84.619,1185.55 83.722,1185.74C81.028,1186.3 78.345,1186.67 75.699,1187.23C74.003,1187.59 72.323,1188.03 70.667,1188.66C69.653,1189.05 68.513,1189.39 67.461,1189.86C66.862,1190.13 66.293,1190.44 65.816,1190.85C65.33,1191.27 64.939,1191.9 64.595,1192.59C64.011,1193.76 63.597,1195.09 63.312,1196.11C63.055,1197.04 62.879,1197.93 62.869,1198.82C62.86,1199.63 62.999,1200.45 63.351,1201.28C64.282,1203.49 65.734,1204.72 67.462,1205.41C70.464,1206.6 74.189,1206.32 77.596,1206.49C78.66,1206.55 79.715,1206.71 80.775,1206.81C81.176,1206.84 81.577,1206.87 81.98,1206.86C84.387,1206.86 86.79,1207.03 89.197,1207.08C90.187,1207.1 91.177,1207.1 92.169,1207.05C94.612,1206.93 97.106,1206.81 99.591,1206.79C101.275,1206.77 102.954,1206.79 104.611,1206.9C107.365,1207.07 110.16,1207.15 112.956,1207.17C115.756,1207.18 118.557,1207.13 121.319,1207.02C124.659,1206.88 127.995,1207.05 131.328,1207.04C132.713,1207.04 134.097,1207.01 135.481,1206.91C138.729,1206.67 142.261,1206.97 145.612,1206.65C146.958,1206.52 148.273,1206.28 149.519,1205.84C149.661,1205.79 149.783,1205.7 149.905,1205.59C150.531,1205.07 151.082,1204.35 151.7,1203.91C152.016,1203.69 152.374,1203.39 152.701,1203.05C152.996,1202.75 153.27,1202.43 153.443,1202.12C153.536,1201.95 153.588,1201.75 153.635,1201.53C153.748,1201.02 153.807,1200.48 153.889,1200.03C154.17,1198.51 154.09,1197.26 153.696,1196.09C153.276,1194.84 152.525,1193.69 151.55,1192.44C149.917,1190.33 147.867,1189.05 145.604,1188.24C141.994,1186.95 137.861,1186.81 133.886,1186.59C132.622,1186.52 131.334,1186.39 130.045,1186.21C128.156,1185.95 126.266,1185.61 124.439,1185.28C122.431,1184.9 120.407,1184.49 118.377,1184.15C117.039,1183.92 115.703,1183.71 114.362,1183.58C114.034,1183.54 113.711,1183.53 113.388,1183.52C112.543,1183.52 111.712,1183.58 110.87,1183.55L109.788,1183.51Z" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
