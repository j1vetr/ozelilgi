import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { 
  type User, 
  type InsertUser,
  type PreRegistration,
  type InsertPreRegistration,
  type ContactSubmission,
  type InsertContactSubmission,
  users,
  preRegistrations,
  contactSubmissions
} from "@shared/schema";
import { eq } from "drizzle-orm";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Pre-registration methods
  createPreRegistration(data: InsertPreRegistration): Promise<PreRegistration>;
  getPreRegistrations(): Promise<PreRegistration[]>;
  
  // Contact submission methods
  createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Pre-registration methods
  async createPreRegistration(data: InsertPreRegistration): Promise<PreRegistration> {
    const result = await db.insert(preRegistrations).values(data).returning();
    return result[0];
  }

  async getPreRegistrations(): Promise<PreRegistration[]> {
    return db.select().from(preRegistrations).orderBy(preRegistrations.createdAt);
  }

  // Contact submission methods
  async createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(data).returning();
    return result[0];
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
  }
}

export const storage = new DatabaseStorage();
