"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cookieConsentContent } from "@/data/cookie-consent";
import { siteConfig } from "@/data/site-config";

import {
  getStoredCookieConsent,
  storeCookieConsent,
  type CookieConsentState,
} from "./cookie-consent-storage";
import styles from "./cookie-consent.module.css";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    // Reads localStorage on mount; only the client knows if consent was already given.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(getStoredCookieConsent() === null);
  }, []);

  const saveAndHide = (consent: CookieConsentState) => {
    storeCookieConsent(consent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={styles.banner}
      role="dialog"
      aria-live="polite"
      aria-label={cookieConsentContent.title}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{cookieConsentContent.title}</h2>
        <p className={styles.description}>
          {cookieConsentContent.description}{" "}
          <Link href={siteConfig.legal.privacyPolicyPath}>
            {cookieConsentContent.privacyPolicyLabel}
          </Link>
        </p>

        {isSettingsOpen && (
          <ul className={styles.categories}>
            {cookieConsentContent.categories.map((category) => (
              <li className={styles.category} key={category.id}>
                <label className={styles.categoryLabel}>
                  <input
                    type="checkbox"
                    checked={
                      category.id === "analytics" ? analyticsChecked : true
                    }
                    disabled={category.required}
                    onChange={(event) =>
                      category.id === "analytics" &&
                      setAnalyticsChecked(event.target.checked)
                    }
                  />
                  {category.label}
                </label>
                <p className={styles.categoryDescription}>
                  {category.description}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.actions}>
          {isSettingsOpen ? (
            <button
              className="button"
              type="button"
              onClick={() => saveAndHide({ analytics: analyticsChecked })}
            >
              {cookieConsentContent.saveSettingsLabel}
            </button>
          ) : (
            <>
              <button
                className="button"
                type="button"
                onClick={() => saveAndHide({ analytics: true })}
              >
                {cookieConsentContent.acceptAllLabel}
              </button>
              <button
                className="button button-secondary"
                type="button"
                onClick={() => saveAndHide({ analytics: false })}
              >
                {cookieConsentContent.rejectAllLabel}
              </button>
              <button
                className={`button button-secondary ${styles.settingsButton}`}
                type="button"
                onClick={() => setIsSettingsOpen(true)}
              >
                {cookieConsentContent.settingsLabel}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
