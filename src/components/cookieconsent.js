import React from "react";

const windowGlobal = typeof window !== 'undefined' && window;
function evaluateGetItem(key) {
  return (windowGlobal.localStorage) ? (windowGlobal.localStorage.getItem(key) || '') : '';
}
function evaluateSetItem(key, val) {
  return (windowGlobal.localStorage) ? windowGlobal.localStorage.setItem(key, val) : '';
}

const useStateWithLocalStorage = localStorageKey => {
  const [consent, setConsent] = React.useState(
    evaluateGetItem(localStorageKey)
  );


  React.useEffect(() => {
    evaluateSetItem(localStorageKey, consent)
  }, [consent, localStorageKey]);

  return [consent, setConsent];
};

const CookieConsent = () => {
  const [consent, setConsent] = useStateWithLocalStorage(
    'myConsent'
  );

  const onAgree = () => setConsent(true);

  if (!consent) {
    return (
      <section className="CookieConsent w-full fixed z-50 bottom-0 bg-white rounded rounded-b-none p-4 flex items-center justify-between">
        <p className="CookieConsent-text mr-4 text-justify">
          I use cookies to ensure you the best experience on my website.
          &nbsp;<br />
          If you continue to use this website, I will assume that you are happy with it.
        </p>
        <button
          type="button"
          className="CookieConsent-button sm:mt-4 px-4 py-2 rounded border-2 border-b-0 text-sm text-white focus:outline-none focus:shadow-outline hover:bg-greensea"
          onClick={onAgree}>
          OK
        </button>
      </section>
    );
  } else {
    return null;
  }
};

export default CookieConsent;
