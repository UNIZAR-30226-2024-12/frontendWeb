<template>
  <Head>
    <Title>Iniciar sesión | WealthWars</Title>
    <Meta name="description" content="Inicio de sesión para jugar WealthWars." />
  </Head>
  <Header></Header>
  <Main>
    <h1 class="my-4 text-2xl">Iniciar sesión</h1>
    <GoogleSignInButton @success="handleLoginSuccess" @error="handleLoginError"></GoogleSignInButton>
  </Main>
  <Footer></Footer>
</template>

<script setup lang="ts">
  import { GoogleSignInButton, type CredentialResponse } from 'vue3-google-signin';

  // Handle success event
  const handleLoginSuccess = (response: CredentialResponse) => {
    const { credential } = response;
    console.log('Access Token', credential);
  };

  // Handle an error event
  const handleLoginError = () => {
    console.error('Login failed');
  };
</script>
