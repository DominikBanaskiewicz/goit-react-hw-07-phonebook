export const getStatusFilter = state => state.filter;
export const getStatusContacts = state => state.contacts.contacts;
export const getStatus = state => state.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
export const inOutId = id => {
  return id;
};

export const selectVisibleContacts = state => {
  const contacts = getStatusContacts(state);
  const filter = getStatusFilter(state);
  let tmp = '';
  filter ? (tmp = filter) : (tmp = '');
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(tmp.toLowerCase())
  );
};
