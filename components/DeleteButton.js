"use client";

import { useState } from "react";
import styles from "./DeletePostButton.module.css";

export default function GenericDeleteButton({
  label = "Delete",
  title = "Delete?",
  message = "Are you sure? This action cannot be undone.",
  deleteAction,
}) {
  const [showModal, setShowModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleConfirmDelete() {
    setIsDeleting(true);
    await deleteAction();
    // redirect happens inside the server action
  }

  return (
    <>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => setShowModal(true)}
      >
        {label}
      </button>

      {showModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowModal(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            <p>{message}</p>

            <div className={styles.modalButtons}>
              <button
                className={styles.btnCancel}
                disabled={isDeleting}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className={styles.btnConfirm}
                disabled={isDeleting}
                onClick={handleConfirmDelete}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
