const m=(r,t="VND",n="vi-VN")=>{if(r==null)return"";const i={style:"currency",currency:t,minimumFractionDigits:0,maximumFractionDigits:0};return new Intl.NumberFormat(n,i).format(r)};export{m as f};
