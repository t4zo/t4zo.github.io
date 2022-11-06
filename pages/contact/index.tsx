import { useRef, useState } from "react";

export default function ContactPage() {
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const messageRef = useRef<HTMLInputElement>();

  return (
    <>
      <h1>Entre em Contato!</h1>
      <form method="post" onSubmit={sendMail}>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" ref={emailRef}/>
        </div>
        <div>
          <label htmlFor="message">Mensagem</label>
          <input type="text" name="message" id="message" ref={messageRef} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );

  function sendMail(e: any) {
    e.preventDefault();

    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(messageRef.current.value)


  }
}
