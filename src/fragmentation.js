registerPaint('fragmentation', class  {
  static get inputProperties() {
    return [
      '--f-n',
      '--f-m',
      '--f-o',
      '--f-l',
      '--f-seed'
    ]
  }
  paint(ctx, size, properties) {
    const n = properties.get('--f-n');
    const m = properties.get('--f-m');
    const o = properties.get('--f-o');
    const w = size.width/n;
    const h = size.height/m;
    const l = properties.get('--f-l');
    
    const mask = 0xffffffff;
    const seed = properties.get('--f-seed');
    let m_w  = (123456789 + seed) & mask;
    let m_z  = (987654321 - seed) & mask;

    let random =  function() {
      m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
      m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;
      var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
      result /= 4294967296;
      return result;
    }
    
    for(var i=0;i<n;i++) {
       for(var j=0;j<m;j++) {
          ctx.fillStyle = 'rgba(0,0,0,'+((random()*(l-1) + 1) - (1-o)*l)+')'; 
          ctx.fillRect(i*w-.5, j*h-.5, w+.5, h+.5);
        }
      }
  }
})
