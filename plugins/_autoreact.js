let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(bilek|banh|cum|kntol|ya|memek|tolol|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepek|owner)/i
handler.command = new RegExp
  
handler.mods = false

module.exports = handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }