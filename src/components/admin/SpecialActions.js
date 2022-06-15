import React from "react";
import "../../assets/styles/AdminMenu.css";
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { doc } from "firebase/firestore";
import {
  Container,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function SpecialActions() {
  const [todos, setTodos] = useState([]);

  const [localLoading, setlocalLoading] = useState(false);

  useEffect(() => {
    setlocalLoading(true);
    const docRef = collection(db, "Specials");
    const q = query(docRef);
    onSnapshot(q, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data().itemName,
        }))
      );
    });
    setlocalLoading(false);
  }, []);

  const deleteTodo = (id) => {
    deleteDoc(doc(db, "Specials", id));
    alert("Selected item successfully deleted!!");
  };

  return (
    <div className="deleteCont">
      {localLoading ? (
        <img
          src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          alt="Loading"
          className="loading-btn"
        />
      ) : (
        <Container
          maxWidth="sm"
          style={{
            backgroundColor: "white",
            padding: 0,
            border: "1px solid lightgrey",
          }}
        >
          <h3 className="heading" style={{ padding: 10 }}>
            Special Menu Items
          </h3>
          <List dense={true}>
            {todos.map((todo) => (
              <ListItem key={todo.id}>
                <ListItemText primary={todo.data} />
                <ListItemSecondaryAction>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "red",
                    }}
                    onClick={() => {
                      if (
                        window.confirm("Do you want to delete " + todo.data)
                      ) {
                        deleteTodo(todo.id);
                      }
                    }}
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                  <Link
                    style={{ marginRight: 10, marginLeft: 10 }}
                    to={`/admin/edit-special/${todo.id}`}
                  >
                    <i className="fas fa-edit"></i>
                  </Link>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Container>
      )}
      <Link
        style={{ color: "white", marginTop: 30 }}
        className="exit-nav-admin"
        to="/admin-dashboard"
      >
        Back
      </Link>
    </div>
  );
}

export default SpecialActions;
