"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useActionState } from "react";
import { handleSignup } from "./lib/actions";

export default function Home() {
  const [state, handleSignUpAction] = useActionState(handleSignup, { message: "" })
  return (
    <main className="p-4 px-6 mx-6">
      <h1 className="is-size-3">Signup</h1>
      <div className="columns">
        <div className="column is-two-fifths p-4">
          <form className="box" action={handleSignUpAction}>
            {state?.message && <p style={{ color: 'red' }}>{state.message}</p>}
            <div className="field my-4">
              <input
                type="text"
                className="input is-dark"
                placeholder="please enter your name"
                name="name"
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-dark"
                placeholder="please enter your surname"
                name="surname"
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-dark"
                placeholder="please enter your login"
                name="login"
              />
            </div>
            <div className="field my-4">
              <input
                type="password"
                className="input is-dark"
                placeholder="please enter your password"
                name="password"
              />
            </div>
            <button className="button is-success">submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
