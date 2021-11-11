registerPaint('fragmentation-hexagon', class  {

  static get inputProperties() {
    return [
      '--f-r',
      '--f-o',
      '--f-l',
      '--f-seed'
    ]
  }
  paint(ctx, size, properties) {
    const r = parseInt(properties.get('--f-r'));
    const o = properties.get('--f-o');
    const w = size.width;
    const h = size.height;
    const a = 2 * Math.PI / 6;
    const l = properties.get('--f-l');
   
    /* seeded random */
    const mask = 0xffffffff;
    const seed = properties.get('--f-o');
    let m_w  = (123456789 + seed) & mask;
    let m_z  = (987654321 - seed) & mask;
    let random =  function() {
      m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
      m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

      var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
      result /= 4294967296;
      return result;
    }
    /**/
    
  for (let y = 0; y + r * Math.sin(a) < (h + 3*r); y += r * Math.sin(a)) {
    for (let x = 0, j = 0; x + r * (1 + Math.cos(a)) < (w + 3*r); x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
         ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
       }
      ctx.closePath();
      var alpha = (random()*(l-1) + 1) - (1-o)*l;
      ctx.fillStyle = 'rgba(0,0,0,'+alpha+')';
      ctx.strokeStyle = 'rgba(0,0,0,'+alpha+')';
      ctx.stroke();
      ctx.fill();
    }
  }
  }

})
