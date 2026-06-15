import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Books from "../pages/Books";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";
import Members from "../pages/Members";
import AddMember from "../pages/AddMember";
import IssueBook from "../pages/IssueBook";
import ReturnBook from "../pages/ReturnBook";
import NotFound from "../pages/NotFound";

import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      {/* Books */}
      <Route
        path="/books"
        element={
          <MainLayout>
            <Books />
          </MainLayout>
        }
      />

      <Route
        path="/books/add"
        element={
          <MainLayout>
            <AddBook />
          </MainLayout>
        }
      />

      <Route
        path="/books/edit/:id"
        element={
          <MainLayout>
            <EditBook />
          </MainLayout>
        }
      />

      {/* Members */}
      <Route
        path="/members"
        element={
          <MainLayout>
            <Members />
          </MainLayout>
        }
      />

      <Route
        path="/members/add"
        element={
          <MainLayout>
            <AddMember />
          </MainLayout>
        }
      />

      {/* Issue Book */}
      <Route
        path="/issue-book"
        element={
          <MainLayout>
            <IssueBook />
          </MainLayout>
        }
      />

      {/* Return Book */}
      <Route
        path="/return-book"
        element={
          <MainLayout>
            <ReturnBook />
          </MainLayout>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;