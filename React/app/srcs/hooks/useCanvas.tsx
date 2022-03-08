import React, { useState, useRef, useEffect } from 'react';

type Point = [number, number];
type Param = {
  fillstyle?: string
  strokestyle?: string
  linewidth?: number,
  font?: string,
}
type Set = Param & {
  range: [number, number]
}
const useCanvas = ({
  fillstyle = 'black',
  strokestyle = 'black',
  linewidth = 1,
  font = '10px serif'
}: Param) => {
  const ref = useRef<React.Ref>(null);
  const set: Set = { fillstyle, strokestyle, linewidth, font, range: [0, 1] };
  let ctx = null;

  useEffect(() => {
    if (!ref) return;
    ctx = (ref.current as HTMLCanvasElement).getContext('2d');
  }, [ ref ]);

  const checkoption = (keys: string[], opt) => {
    const option = { ...set };
    for (let i = 0; i < keys.length; i++) {
      option[keys[i]] = opt[keys[i]] ? opt[keys[i]] : option[keys[i]];
    }

    return option;
  };

  const drawLine = (points: Point[], option?: { strokestyle?: string, linewidth?: number }) => {
    const { strokestyle, linewidth } = option? checkoption(['strokestyle', 'linewidth'], option) : set;
    const { strokeStyle, lineWidth } = ctx;

    ctx.strokeStyle = strokestyle;
    ctx.lineWidth = linewidth;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
  }
  const drawRect = (points: [Point, Point], option?: { fillstyle?: string }) => {
    const { fillstyle } = option? checkoption(['fillstyle'], option) : set;
    const { fillStyle } = ctx;

    ctx.fillStyle = fillstyle;
    ctx.fillRect(...points[0], ...points[1]);
    ctx.strokeRect(...points[0], ...points[1]);

    ctx.fillStyle = fillStyle;
  }
  const drawStrokeRect = (points: [Point, Point], option?: { fillstyle?: string, strokestyle?: string, linewidth?: number }) => {
    const { fillstyle, strokestyle, linewidth } = option? checkoption(['fillstyle', 'strokestyle', 'linewidth'], option) : set;
    const { strokeStyle, lineWidth } = ctx;
    drawRect(points, { fillstyle });

    ctx.strokeStyle = strokestyle;
    ctx.lineWidth = linewidth;
    ctx.strokeRect(...points[0], ...points[1]);
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
  }
  const drawCircle = (point: Point, r: number, option?: { range?: [ number, number ], fillstyle?: string }) => {
    const { range, fillstyle } = option? checkoption(['range', 'fillstyle'], option) : set;
    const { fillStyle } = ctx;
  
    ctx.fillStyle = fillstyle;
    ctx.beginPath();
    ctx.arc(...point, r, range[0] * Math.PI * 2, range[1] * Math.PI * 2);
    ctx.fill();
  
    ctx.fillStyle = fillStyle;
  }
  const drawArc = (point: Point, r: number, option?: { range?: [number, number], strokestyle?: string, linewidth: number }) => {
    const { range, strokestyle, linewidth } = option? checkoption(['range', 'strokestyle', 'linewidth'], option): set;
    const { strokeStyle, lineWidth } = ctx;
  
    ctx.strokeStyle = strokestyle;
    ctx.lineWidth = linewidth;
    ctx.beginPath();
    range? ctx.arc(...point, r, range[0] * Math.PI * 2, range[1] * Math.PI * 2) : ctx.arc(...point, r, 0, Math.PI * 2);
    ctx.stroke();
  
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
  }
  const drawStrokeCircle = (point: Point, r: number, option?: { range?: [ number, number ], fillstyle?: string, strokestyle?: string, linewidth?: number }) => {
    const { range, fillstyle, strokestyle, linewidth } = option? checkoption(['range', 'fillstyle', 'linewidth', 'strokestyle'], option) : set;

    drawCircle(point, r, { range, fillstyle });
    drawArc(point, r, { range, strokestyle, linewidth });
  }
  const drawText = (text: string, point: Point, option?: { maxwidth?: number, fillstyle?: string, font?: string }) => {
    const { fillstyle, font } = option? checkoption(['fillstyle', 'font'], option) : set;
    const maxwidth = option?.maxwidth;
    const { fillStyle } = ctx;
    const beforefont = ctx.font;

    ctx.fillStyle = fillstyle;
    ctx.font = font;
    ctx.fillText(text, ...point, maxwidth);

    ctx.font = beforefont;
    ctx.fillStyle = fillStyle;
  }

  return { ref, cvs: {
    drawLine, drawRect, drawCircle, drawStrokeCircle, drawStrokeRect, drawArc, drawText
  } }
};

export default useCanvas;
